export async function kanbanData() {
  try {
    var resp = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');

    return resp.json();
  } catch(err) {
    throw err;
  }
}