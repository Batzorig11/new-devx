"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import type { CopyBlock } from "../data/foundation-lessons";

export function CopyCodeBlock({ block }: { block: CopyBlock }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(block.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="copy-block">
      <div className="copy-block-head">
        <div>
          <span>{block.language.toUpperCase()}</span>
          <strong>{block.title}</strong>
        </div>
        <button type="button" onClick={copyCode} aria-label={`${block.title} хуулах`}>
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? "Хууллаа" : "Хуулах"}
        </button>
      </div>
      <pre><code>{block.code}</code></pre>
      {block.note && <p className="copy-note">{block.note}</p>}
    </div>
  );
}
