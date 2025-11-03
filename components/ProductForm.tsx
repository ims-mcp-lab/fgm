import { clsx } from "clsx";
import styles from "./ProductForm.module.css";

type SegmentedOption = {
  label: string;
  active?: boolean;
};

const titleOptions: SegmentedOption[] = [
  { label: "직접 입력", active: true },
  { label: "룰셋 적용" }
];

const benefitOptions = [
  { id: "discount", label: "할인" },
  { id: "exposure", label: "노출 증가" }
];

const chatOptions = [
  { id: "notice", label: "공지 허용" },
  { id: "block", label: "댓글 허용 안함", active: true }
];

export function ProductForm() {
  return (
    <section className={styles.panel} aria-labelledby="product-form-title">
      <header className={styles.panelHeader}>
        <h2 id="product-form-title">상품 정보</h2>
        <p>라이브 진행 전 사전 점검을 위해 상세 정보를 입력해주세요.</p>
      </header>

      <div className={styles.field}>
        <div className={styles.fieldHeader}>
          <label htmlFor="product-name">상품명</label>
          <Segmented options={titleOptions} />
        </div>
        <input
          id="product-name"
          className={styles.textInput}
          placeholder="상품명을 입력해주세요"
          defaultValue="스위트 모카 텀블러 세트"
        />
        <p className={styles.helper}>검색 및 추천 영역에 노출될 공식 상품명을 입력해주세요.</p>
      </div>

      <div className={styles.field}>
        <div className={styles.fieldHeader}>
          <label htmlFor="discount">할인률</label>
          <button type="button" className={styles.secondaryButton}>
            할인률 계산
          </button>
        </div>
        <div className={styles.rangeRow}>
          <input
            id="discount"
            className={styles.rangeInput}
            type="range"
            min={0}
            max={100}
            defaultValue={70}
          />
          <span className={styles.rangeValue}>70%</span>
        </div>
        <p className={styles.helper}>최대 10% 할인까지 적용 가능</p>
      </div>

      <div className={styles.field}>
        <div className={styles.fieldHeader}>
          <label htmlFor="description">상품 설명</label>
          <span className={styles.counter}>0 / 300</span>
        </div>
        <textarea
          id="description"
          rows={4}
          className={styles.textArea}
          placeholder="상품의 주요 특징과 방송 중 강조할 포인트를 정리해주세요."
        />
      </div>

      <div className={styles.field}>
        <span className={styles.fieldLabel}>등록 혜택 선택</span>
        <div className={styles.optionGrid}>
          {benefitOptions.map((option) => (
            <label key={option.id} className={styles.checkboxCard}>
              <input type="checkbox" defaultChecked={option.id === "discount"} />
              <div>
                <span>{option.label}</span>
                <p>라이브 전용 혜택을 구성해 시청자 참여를 유도해보세요.</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.field}>
        <span className={styles.fieldLabel}>채팅창 상태 알림</span>
        <div className={styles.segmentedRow}>
          {chatOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              className={clsx(styles.segmentedButton, option.active && styles.segmentedActive)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <footer className={styles.footer}>
        <button type="button" className={styles.ghostButton}>
          등록 취소
        </button>
        <button type="button" className={styles.primaryButton}>
          다음 단계
        </button>
      </footer>
    </section>
  );
}

type SegmentedProps = {
  options: SegmentedOption[];
};

function Segmented({ options }: SegmentedProps) {
  return (
    <div className={styles.segmentedControl}>
      {options.map((option) => (
        <button
          key={option.label}
          type="button"
          className={clsx(styles.segmentedButton, option.active && styles.segmentedActive)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
