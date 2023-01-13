declare module globalThis {
    var testRender: (node: ReactNode) => RenderResult,
    var testRenderWithoutRouter: (node: ReactNode) => RenderResult,
    var app: Application
}
