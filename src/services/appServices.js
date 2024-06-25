export async function kanbanData(timeout=10000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {

    var resp = await fetch(
      'https://api.quicksell.co/v1/internal/frontend-assignment', {
        signal: controller.signal
      }
    );

    clearTimeout(timeoutId);
    
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }

    return resp.json();
  } catch(error) {
    if (error.name === 'AbortError') {
      console.error('Fetch aborted after timeout');
    } else {
      console.error('Fetch error:', error);
    }

    throw error;
  }
}