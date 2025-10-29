export function ValidationEmail(email) {
    if (!email) return false;
    return email.includes('@');
}