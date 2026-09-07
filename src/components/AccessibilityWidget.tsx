"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { AccessibilityIcon } from "@/components/icons";

// Keep this key in sync with the inline bootstrap script in layout.tsx —
// that script re-applies the same saved settings before hydration, so the
// site never flashes unstyled on a hard reload.
const STORAGE_KEY = "neta-a11y-settings-v1";
const TEXT_SCALE_STEPS = [90, 100, 110, 120, 130, 140, 150];
const DEFAULT_TEXT_SCALE_INDEX = 1; // 100%

type A11ySettings = {
  textScaleIndex: number;
  highContrast: boolean;
  underlineLinks: boolean;
  readableFont: boolean;
  reduceMotion: boolean;
};

const DEFAULT_SETTINGS: A11ySettings = {
  textScaleIndex: DEFAULT_TEXT_SCALE_INDEX,
  highContrast: false,
  underlineLinks: false,
  readableFont: false,
  reduceMotion: false,
};

// Settings live in localStorage as the single source of truth; the
// component just mirrors it via useSyncExternalStore (the React-blessed way
// to read a browser-only external store without a setState-in-effect
// warning or an SSR/hydration mismatch). A tiny cache keeps the snapshot
// referentially stable when the underlying string hasn't changed.
let cachedRaw: string | null | undefined;
let cachedSettings: A11ySettings = DEFAULT_SETTINGS;

function getSettingsSnapshot(): A11ySettings {
  let raw: string | null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    raw = null;
  }
  if (raw === cachedRaw) return cachedSettings;
  cachedRaw = raw;
  try {
    cachedSettings = raw ? { ...DEFAULT_SETTINGS, ...JSON.parse(raw) } : DEFAULT_SETTINGS;
  } catch {
    cachedSettings = DEFAULT_SETTINGS;
  }
  return cachedSettings;
}

function getSettingsServerSnapshot(): A11ySettings {
  return DEFAULT_SETTINGS;
}

function subscribeToSettingsChange(onChange: () => void) {
  window.addEventListener("a11y-settings-change", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("a11y-settings-change", onChange);
    window.removeEventListener("storage", onChange);
  };
}

function applyToDocument(settings: A11ySettings) {
  const root = document.documentElement;
  root.style.fontSize = `${TEXT_SCALE_STEPS[settings.textScaleIndex]}%`;

  if (settings.highContrast) root.setAttribute("data-a11y-contrast", "high");
  else root.removeAttribute("data-a11y-contrast");

  if (settings.underlineLinks) root.setAttribute("data-a11y-underline-links", "on");
  else root.removeAttribute("data-a11y-underline-links");

  if (settings.readableFont) root.setAttribute("data-a11y-readable-font", "on");
  else root.removeAttribute("data-a11y-readable-font");

  if (settings.reduceMotion) root.setAttribute("data-a11y-reduce-motion", "on");
  else root.removeAttribute("data-a11y-reduce-motion");
}

// The only place settings are written. Applies to the DOM immediately, then
// persists + broadcasts so useSyncExternalStore's snapshot (and any other
// listener, e.g. the Hero video) picks up the change.
function updateSettings(next: A11ySettings) {
  applyToDocument(next);
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // localStorage unavailable (private browsing, etc.) — the change still
    // applies for this page view, it just won't persist across reloads.
  }
  window.dispatchEvent(new Event("a11y-settings-change"));
}

function ToggleRow({
  label,
  pressed,
  onClick,
}: {
  label: string;
  pressed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`flex w-full items-center justify-between border px-4 py-2.5 text-base transition-colors ${
        pressed
          ? "border-accent bg-accent text-accent-foreground"
          : "border-border/40 bg-transparent text-foreground hover:bg-surface-muted/30"
      }`}
    >
      <span>{label}</span>
      <span aria-hidden="true" className="text-base">
        {pressed ? "פעיל" : "כבוי"}
      </span>
    </button>
  );
}

export default function AccessibilityWidget() {
  const settings = useSyncExternalStore(
    subscribeToSettingsChange,
    getSettingsSnapshot,
    getSettingsServerSnapshot
  );
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'button:not(:disabled), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    function onPointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) panelRef.current?.focus();
  }, [isOpen]);

  function update(partial: Partial<A11ySettings>) {
    updateSettings({ ...settings, ...partial });
  }

  return (
    <div
      ref={containerRef}
      className="fixed z-50 bottom-[calc(1rem+env(safe-area-inset-bottom))] left-4"
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label="פתיחת תפריט נגישות"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform hover:scale-105"
      >
        <AccessibilityIcon />
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          id="accessibility-panel"
          role="region"
          aria-label="הגדרות נגישות"
          tabIndex={-1}
          className="absolute bottom-full left-0 mb-3 max-h-[75vh] w-72 max-w-[calc(100vw-2rem)] overflow-y-auto border border-border/40 bg-surface p-4 text-foreground shadow-none sm:w-80"
        >
          <h2 className="text-lg font-semibold text-foreground">הגדרות נגישות</h2>

          <div className="mt-4 flex items-center justify-between gap-3 border border-border/40 px-4 py-2.5">
            <span className="text-base">גודל טקסט</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="הקטנת טקסט"
                disabled={settings.textScaleIndex === 0}
                onClick={() => update({ textScaleIndex: Math.max(0, settings.textScaleIndex - 1) })}
                className="flex h-9 w-9 items-center justify-center border border-border/40 text-lg font-semibold disabled:opacity-40"
              >
                א−
              </button>
              <button
                type="button"
                aria-label="הגדלת טקסט"
                disabled={settings.textScaleIndex === TEXT_SCALE_STEPS.length - 1}
                onClick={() =>
                  update({ textScaleIndex: Math.min(TEXT_SCALE_STEPS.length - 1, settings.textScaleIndex + 1) })
                }
                className="flex h-9 w-9 items-center justify-center border border-border/40 text-lg font-semibold disabled:opacity-40"
              >
                א+
              </button>
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-2">
            <ToggleRow
              label="ניגודיות גבוהה"
              pressed={settings.highContrast}
              onClick={() => update({ highContrast: !settings.highContrast })}
            />
            <ToggleRow
              label="הדגשת קישורים"
              pressed={settings.underlineLinks}
              onClick={() => update({ underlineLinks: !settings.underlineLinks })}
            />
            <ToggleRow
              label="גופן קריא"
              pressed={settings.readableFont}
              onClick={() => update({ readableFont: !settings.readableFont })}
            />
            <ToggleRow
              label="הפחתת אנימציות"
              pressed={settings.reduceMotion}
              onClick={() => update({ reduceMotion: !settings.reduceMotion })}
            />
          </div>

          <button
            type="button"
            onClick={() => updateSettings(DEFAULT_SETTINGS)}
            className="mt-3 w-full border border-border/40 px-4 py-2.5 text-base font-medium text-foreground hover:bg-surface-muted/30"
          >
            איפוס הגדרות נגישות
          </button>
        </div>
      )}
    </div>
  );
}
