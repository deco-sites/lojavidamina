export function closeDrawer(id: string) {
    const input = document.getElementById(id) as HTMLInputElement | null;
    console.log(id);
    if (input) input.checked = false;
}