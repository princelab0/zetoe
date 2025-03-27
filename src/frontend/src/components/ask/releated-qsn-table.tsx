import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";

const features = [
  {
    feature: "featuresList.f1",
    nepaliGpt: true,
    perperxility: true,
  },
  {
    feature: "featuresList.f2",
    nepaliGpt: true,
    perperxility: true,
  },
  {
    feature: "featuresList.f3",
    nepaliGpt: true,
    perperxility: false,
  },
  {
    feature: "featuresList.f4",
    nepaliGpt: true,
    perperxility: false,
  },
  {
    feature: "featuresList.f5",
    nepaliGpt: true,
    perperxility: false,
  },
];

export default function ReleatedQsnTable() {
  const t = useTranslations("faq.accordion.item2.answer");
  return (
    <Table>
      <TableCaption>{t("caption")}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[300px] font-bold'>
            {t("headers.features")}
          </TableHead>
          <TableHead className='font-bold'>{t("headers.nepaliGpt")}</TableHead>
          <TableHead className='font-bold'>
            {t("headers.perperxility")}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {features.map((item) => (
          <TableRow key={t(item.feature)}>
            <TableCell className='font-medium'>{t(item.feature)}</TableCell>
            <TableCell>
              {item.nepaliGpt ? (
                <Check className='h-4 w-4 text-blue-500' />
              ) : (
                <X className='h-4 w-4 text-red-500' />
              )}
            </TableCell>
            <TableCell>
              {item.perperxility ? (
                <Check className='h-4 w-4 text-blue-500' />
              ) : (
                <X className='h-4 w-4 text-red-500' />
              )}
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell className='font-medium'>{t("pricing.feature")}</TableCell>
          <TableCell>$5</TableCell>
          <TableCell>$20</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
