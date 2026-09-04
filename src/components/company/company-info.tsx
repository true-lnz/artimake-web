import Icons from "@/components/global/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CompanyInfo() {
  return (
    <div className="flex max-w-xl flex-col gap-4">
      <div className="flex items-center gap-4">
        <Icons.logo className="h-11 w-11 shrink-0 text-primary" />
        <div>
          <p className="font-heading uppercase text-md font-black tracking-normal">
            Умные кресла Артимэйк
          </p>
          <p className="text-xs leading-5 text-muted-foreground">
            Комфортная&nbsp;работа&nbsp;с&nbsp;умной&nbsp;поддержкой
          </p>
        </div>
      </div>
      <address className="not-italic text-sm leading-6 text-muted-foreground">
        <p>ООО&nbsp;«Артимэйк»</p>
        <p>ИНН:&nbsp;0273954430</p>
        <p>
          Почта:&nbsp;
          <a
            className="underline underline-offset-4 hover:text-foreground"
            href="mailto:info@artimake.ru"
          >
            info@artimake.ru
          </a>
        </p>
      </address>
      <p className="text-xs leading-5 text-muted-foreground">
        <span className="block">
          Умные&nbsp;кресла&nbsp;Артимэйк не&nbsp;являются медицинским&nbsp;изделием.
        </span>
        <span className="block">
          ООО&nbsp;«Артимэйк» не&nbsp;оказывает медицинские&nbsp;услуги. 18+
        </span>
      </p>
      <Dialog>
        <DialogTrigger className="w-fit text-left text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
          О&nbsp;продукте и&nbsp;ограничениях
        </DialogTrigger>
        <DialogContent className="max-h-[min(680px,calc(100vh-2rem))] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>О&nbsp;продукте и&nbsp;ограничениях</DialogTitle>
            <DialogDescription>
              Информационное уведомление о&nbsp;назначении продукта.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm leading-6 text-muted-foreground">
            <p>
              Продукт предназначен для информационной поддержки пользователя при работе и длительном
              сидении. Он не является медицинским изделием и не предназначен для диагностики,
              лечения или профилактики заболеваний.
            </p>
            <p>
              Информация и напоминания продукта не заменяют консультацию врача или другого
              квалифицированного специалиста. При наличии жалоб на здоровье обратитесь к
              специалисту.
            </p>
            <p>
              Понятие медицинского изделия и требования к его обращению определяются
              законодательством Российской Федерации, включая статью 38 Федерального закона от
              21.11.2011 № 323-ФЗ «Об основах охраны здоровья граждан в Российской Федерации».
            </p>
            <div className="border-t pt-4">
              <p className="font-medium text-foreground">Официальные источники</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>
                  <a
                    className="underline underline-offset-4 hover:text-foreground"
                    href="https://www.consultant.ru/document/cons_doc_LAW_121895/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Федеральный закон № 323-ФЗ
                  </a>
                </li>
                <li>
                  <a
                    className="underline underline-offset-4 hover:text-foreground"
                    href="https://roszdravnadzor.gov.ru/medproducts"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Росздравнадзор: медицинские изделия
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
