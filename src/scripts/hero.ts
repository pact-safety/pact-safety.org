// Tab-completes the hero through pact/<name>. The server renders the first
// item fully typed, so the page reads correctly before (or without) this.
interface Item {
  name: string;
  desc: string;
}

const root = document.querySelector<HTMLElement>("[data-hero]");
if (root) {
  const items: Item[] = JSON.parse(root.dataset.items ?? "[]");
  const typed = root.querySelector<HTMLElement>("[data-typed]")!;
  const desc = root.querySelector<HTMLElement>("[data-desc]")!;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let i = 0;
  let n = items[0]?.name.length ?? 0;
  let phase: "hold" | "del" | "type" = "hold";
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const show = () => {
    typed.textContent = items[i].name.slice(0, n);
    desc.textContent = `→ ${items[i].desc}`;
    desc.style.opacity = phase === "hold" ? "1" : "0";
  };

  async function run() {
    while (items.length > 1) {
      if (reduce) {
        await sleep(3500);
        i = (i + 1) % items.length;
        n = items[i].name.length;
        show();
        continue;
      }
      if (phase === "hold") {
        await sleep(2400);
        phase = "del";
      } else if (phase === "del") {
        if (n > 0) {
          n -= 1;
          await sleep(28);
        } else {
          i = (i + 1) % items.length;
          phase = "type";
          await sleep(260);
        }
      } else if (n < items[i].name.length) {
        n += 1;
        await sleep(65 + Math.random() * 45);
      } else {
        phase = "hold";
      }
      show();
    }
  }
  run();
}

// Copy buttons: <button data-copy="text">. Clipboard can be refused (insecure
// context, permissions); the command stays visible to select by hand.
for (const btn of document.querySelectorAll<HTMLButtonElement>("[data-copy]")) {
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy ?? "");
      btn.textContent = "copied";
      setTimeout(() => (btn.textContent = "copy"), 1600);
    } catch {
      btn.textContent = "select it";
    }
  });
}
