import NewsletterForm from "@shared-components/forms/email/_components//newsletter-form";

interface NewsletterProps {
  notification: string;
  placeholder: string;
  newsletterbutton: string;
}

export default function Newsletter({
  notification,
  placeholder,
  newsletterbutton,
}: NewsletterProps) {
  return (
    <NewsletterForm
      notification={notification}
      placeholder={placeholder}
      newsletterbutton={newsletterbutton}
    />
  );
}
