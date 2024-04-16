import { ipcRenderer } from "electron";
import Elements from "./renderer/elements";
import { renderMarkdown } from "./renderer/markdown";

ipcRenderer.on("file-opened", (_, content, filePath) => {
	Elements.MarkdownView.value = content;
	renderMarkdown(content);
});
