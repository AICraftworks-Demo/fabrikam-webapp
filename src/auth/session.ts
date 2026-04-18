export interface Session {
  userId: string;
  expiresAt: number;
}

export function isSessionValid(session: Session): boolean {
  return session.expiresAt > Date.now();
}
