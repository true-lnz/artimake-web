import CompanyInfo from "@/components/company/company-info";
import { FeedbackDialog } from "@/components/feedback/feedback-dialog";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";

export const metadata = {
  title: "Контакты — Артимэйк",
  description: "Контактная информация ООО «Артимэйк» и форма обратной связи.",
};

export default function ContactsPage() {
  return (
    <MaxWidthWrapper className="py-16 sm:py-24">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <div>
          <p className="text-sm font-medium text-primary">Артимэйк</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Контакты</h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Свяжитесь с нами — ответим на вопросы о креслах, приложении и сотрудничестве.
          </p>
          <div className="mt-6">
            <FeedbackDialog />
          </div>
        </div>
        <CompanyInfo />
      </div>
    </MaxWidthWrapper>
  );
}
