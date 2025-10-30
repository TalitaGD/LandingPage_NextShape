import { Accordion, AccordionItem } from "@heroui/react";

function Faq() {
  const faqItems = [
    {
      key: "1",
      title: "O que é o NextShape?",
      content: (
        <>
          A Nextshape é uma plataforma de saúde que oferece protocolos de emagrecimento personalizados, unindo tecnologia, ciência e acompanhamento médico. Por meio de teleconsulta, nossos consumidores recebem planos exclusivos que combinam suplementação nutricional, orientações alimentares e, quando indicado, terapias injetáveis avançadas, como a tirzepatida (ex mounjaro) – sempre com prescrição e supervisão especializada.
          <br /><br />
          Nossa empresa surge como uma healthtech brasileira voltada ao emagrecimento personalizado, oferecendo uma solução integrada que combina telemedicina, suplementação nutricional e terapias farmacológicas avançadas.
        </>
      )
    },
    {
      key: "2",
      title: "Preciso sair de casa para participar?",
      content: "Não! A Next Shape se preocupa em proporcionar a Tele Consulta e o recebimento dos medicamentos/suplementos no conforto do seu lar!"
    },
    {
      key: "3",
      title: "O tratamento é seguro?",
      content: (
        <>
          Sim!<br />
          • A prescrição é individual e feita por médico habilitado;<br />
          • Laboratórios parceiros com licença sanitária vigente;<br />
          • Entrega rastreável diretamente para o consumidor;<br />
          • Total conformidade com ANVISA e boas práticas médicas.
        </>
      )
    },
    {
      key: "4",
      title: "Quanto tempo dura o programa?",
      content: "Cada paciente tem suas características, contudo, o protocolo pode durar até 04 meses."
    }
  ];

  return (
    <div className="faq-accordion-wrapper">
      <Accordion defaultSelectedKeys={["1"]} selectionMode="single" variant="light">
        {faqItems.map((item) => (
          <AccordionItem
            key={item.key}
            aria-label={item.title}
            title={item.title}
          >
            <div className="text-muted">
              {item.content}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Faq;


