export default interface NavItem {
    path: string
    name: string
    children?: Array<{
        path: string
        name: string
    }>
}
