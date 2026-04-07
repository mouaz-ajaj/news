"use client";

import { useEffect, useRef, useState } from "react";
import type EditorJS from "@editorjs/editorjs";

type EditorOutput = {
  time: number;
  blocks: Array<{
    id?: string;
    type: string;
    data: Record<string, unknown>;
  }>;
  version: string;
};

const HOLDER_ID = "editorjs-holder";

export default function EditorJsPage() {
  const editorRef = useRef<EditorJS | null>(null);
  const [savedOutput, setSavedOutput] = useState<string>("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function initEditor() {
      if (editorRef.current || cancelled) return;

      const [
        { default: EditorJsClass },
        { default: Header },
        { default: List },
        { default: Quote },
        { default: Code },
        { default: Delimiter },
        { default: Table },
        { default: Checklist },
        { default: Marker },
        { default: InlineCode },
        { default: Warning },
      ] = await Promise.all([
        import("@editorjs/editorjs"),
        import("@editorjs/header"),
        import("@editorjs/list"),
        import("@editorjs/quote"),
        import("@editorjs/code"),
        import("@editorjs/delimiter"),
        import("@editorjs/table"),
        import("@editorjs/checklist"),
        import("@editorjs/marker"),
        import("@editorjs/inline-code"),
        import("@editorjs/warning"),
      ]);

      if (cancelled) return;

      const editor = new EditorJsClass({
        holder: HOLDER_ID,
        placeholder: "ابدأ كتابة المقال هنا...",
        autofocus: true,
        inlineToolbar: true,
        data: {
          time: Date.now(),
          blocks: [
            {
              type: "header",
              data: {
                text: "Editor.js Demo",
                level: 2,
              },
            },
            {
              type: "paragraph",
              data: {
                text: "هذا مثال سريع لعرض فكرة Editor.js: كل محتوى يتم حفظه كـ blocks JSON.",
              },
            },
            {
              type: "list",
              data: {
                style: "unordered",
                items: ["Blocks", "Tools", "Inline Toolbar", "Save API"],
              },
            },
          ],
        },
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
            config: {
              levels: [2, 3, 4],
              defaultLevel: 2,
            },
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
            config: {
              quotePlaceholder: "اكتب اقتباس...",
              captionPlaceholder: "اسم المصدر",
            },
          },
          code: Code,
          delimiter: Delimiter,
          table: Table,
          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },
          marker: Marker,
          inlineCode: InlineCode,
          warning: {
            class: Warning,
            inlineToolbar: true,
            config: {
              titlePlaceholder: "عنوان التنبيه",
              messagePlaceholder: "محتوى التنبيه",
            },
          },
        },
      });

      editorRef.current = editor;
    }

    initEditor();

    return () => {
      cancelled = true;
      if (editorRef.current?.destroy) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  async function handleSave() {
    if (!editorRef.current) return;
    try {
      setIsSaving(true);
      const output = (await editorRef.current.save()) as EditorOutput;
      setSavedOutput(JSON.stringify(output, null, 2));
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f8f6f3] px-4 py-12 text-[#1f1f1f] md:px-8">
      <section className="mx-auto mb-8 max-w-6xl rounded-2xl border border-[#d8d2c9] bg-white p-6 shadow-sm">
        <h1 className="mb-3 text-3xl font-bold md:text-4xl">Editor.js Overview</h1>
        <p className="mb-6 text-sm text-[#5c5954] md:text-base">
          صفحة تجريبية بسيطة على route <code>/editor-js</code> لعرض فكرة المكتبة بشكل عملي.
        </p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#e7e2da] bg-[#fcfbf9] p-4">
            <h2 className="mb-1 font-semibold">Blocks</h2>
            <p className="text-sm text-[#5c5954]">المحتوى يُخزن كـ JSON blocks بدل HTML خام.</p>
          </div>
          <div className="rounded-xl border border-[#e7e2da] bg-[#fcfbf9] p-4">
            <h2 className="mb-1 font-semibold">Tools</h2>
            <p className="text-sm text-[#5c5954]">كل نوع محتوى (Header/List/Quote...) عبارة عن Tool.</p>
          </div>
          <div className="rounded-xl border border-[#e7e2da] bg-[#fcfbf9] p-4">
            <h2 className="mb-1 font-semibold">Inline Toolbar</h2>
            <p className="text-sm text-[#5c5954]">تنسيق مباشر داخل النص مثل marker و inline code.</p>
          </div>
          <div className="rounded-xl border border-[#e7e2da] bg-[#fcfbf9] p-4">
            <h2 className="mb-1 font-semibold">Save API</h2>
            <p className="text-sm text-[#5c5954]">الحفظ يعطي Output منظم جاهز للتخزين في قاعدة البيانات.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl rounded-2xl border border-[#d8d2c9] bg-white p-6 shadow-sm">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold">Live Editor</h2>
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="rounded-lg bg-[#73000c] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5f0009] disabled:opacity-60"
          >
            {isSaving ? "Saving..." : "Save JSON"}
          </button>
        </div>

        <div
          id={HOLDER_ID}
          className="min-h-[320px] rounded-xl border border-[#e7e2da] bg-[#fcfbf9] p-4"
        />
      </section>

      <section className="mx-auto mt-6 max-w-6xl rounded-2xl border border-[#d8d2c9] bg-[#111111] p-6 text-white shadow-sm">
        <h3 className="mb-3 text-lg font-semibold">Saved Output (JSON)</h3>
        <pre className="overflow-x-auto rounded-lg bg-black/40 p-4 text-xs leading-relaxed md:text-sm">
          {savedOutput || "// اضغط Save JSON لعرض الناتج هنا"}
        </pre>
      </section>
    </main>
  );
}

