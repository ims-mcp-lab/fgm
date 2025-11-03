import styles from "./PhonePreview.module.css";

export function PhonePreview() {
  return (
    <aside className={styles.wrapper} aria-label="라이브 미리보기">
      <div className={styles.frame}>
        <div className={styles.screenNoise}>
          <span>테스트 영상 확인</span>
        </div>
        <div className={styles.overlay}>
          <div className={styles.badge}>실시간</div>
          <div className={styles.title}>스위트 모카 텀블러 세트</div>
          <p className={styles.caption}>
            지금 라이브 특가로 만나보세요. 방송 중 전용 쿠폰이 제공됩니다.
          </p>
        </div>
      </div>
    </aside>
  );
}
