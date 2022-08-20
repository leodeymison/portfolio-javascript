export type MessageType = {
    text: string,
    type: "error" | "ok" | "warnning",
    active(value: boolean): void
}