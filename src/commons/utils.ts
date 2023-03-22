// 여섯자리 랜덤한 숫자 (string)
export function getToken(): string {
  const count = 6;
  const token = String(Math.floor(Math.random() * 10 ** count)).padStart(
    count,
    '0',
  );
  return token;
}
