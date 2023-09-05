export default function wait(milliseconds: number): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}

// Example usage:
