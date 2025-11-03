import { ProductForm } from "@/components/ProductForm";
import { PhonePreview } from "@/components/PhonePreview";
import { StepHeader } from "@/components/StepHeader";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <StepHeader />
        <div className={styles.contentArea}>
          <ProductForm />
          <PhonePreview />
        </div>
      </div>
    </main>
  );
}
