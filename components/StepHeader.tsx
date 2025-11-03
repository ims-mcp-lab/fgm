import styles from "./StepHeader.module.css";

type Step = {
  id: number;
  label: string;
  active?: boolean;
};

const steps: Step[] = [
  { id: 1, label: "상품 등록", active: true },
  { id: 2, label: "기본 테스트" },
  { id: 3, label: "라이브 시작" }
];

export function StepHeader() {
  return (
    <header className={styles.container}>
      <div>
        <h1 className={styles.title}>라이브 상품 등록</h1>
        <p className={styles.subtitle}>방송에 노출될 상품 정보를 입력해주세요.</p>
      </div>
      <nav className={styles.stepNav} aria-label="등록 단계">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`${styles.stepItem} ${
              step.active ? styles.stepItemActive : ""
            }`}
          >
            <span className={styles.stepNumber}>{step.id}</span>
            <span>{step.label}</span>
          </div>
        ))}
      </nav>
      <div className={styles.liveToggle}>
        <span>라이브 준비</span>
        <button type="button" className={styles.toggleButton} aria-pressed>
          <span className={styles.toggleThumb} />
        </button>
      </div>
    </header>
  );
}
