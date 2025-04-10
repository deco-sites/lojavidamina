export function closeDrawer(id: string) {
    const input = document.getElementById(id) as HTMLInputElement | null;
    if (input) input.checked = false;
}