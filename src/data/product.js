// src/data/product.js
export default {
  // Identidade
  area: "Direito Tributário",
  nome: "Equiparação de Clínicas Médicas a Hospitais",
  publico: "Clínicas médicas no regime de Lucro Presumido que realizam procedimentos cirúrgicos ou diagnósticos complexos.",

  // Hero
  headline: "Sua clínica paga 300% a mais de impostos do que o necessário?",
  subheadline: "Equipare sua estrutura a um hospital e reduza o IRPJ e CSLL de 32% para 8%. Recupere o que foi pago indevidamente nos últimos 5 anos.",
  valorMaximo: "75%",
  prazoRetroativo: "5 anos",

  // Stats (exatamente 4)
  stats: [
    { valor: "75%", rotulo: "Economia Fiscal" },
    { valor: "60", rotulo: "Meses Retroativos" },
    { valor: "STJ", rotulo: "Tese Consolidada" },
    { valor: "SELIC", rotulo: "Correção de Créditos" },
  ],

  // Problema (exatamente 4 cards)
  dores: [
    { 
      emoji: "💸", 
      titulo: "Alíquota Abusiva", 
      texto: "A Receita Federal cobra 32% sobre suas receitas, ignorando que sua estrutura presta serviços de natureza hospitalar." 
    },
    { 
      emoji: "📉", 
      titulo: "Caixa Sufocado", 
      texto: "Recursos que poderiam ser reinvestidos na clínica estão sendo drenados por uma tributação ilegal e desproporcional." 
    },
    { 
      emoji: "⚖️", 
      titulo: "Desigualdade Competitiva", 
      texto: "Enquanto sua clínica paga o máximo, concorrentes já utilizam a equiparação para reduzir custos e aumentar margens." 
    },
    { 
      emoji: "⏳", 
      titulo: "Prazo Expirando", 
      texto: "O direito de recuperar o passado é limitado. Cada mês de espera representa uma perda irreversível de créditos retroativos." 
    },
  ],

  // Como funciona (exatamente 4 passos)
  passos: [
    { 
      numero: "01", 
      titulo: "Auditoria Técnica", 
      descricao: "Analisamos se seus serviços se enquadram no conceito jurídico de 'serviços hospitalares' conforme o STJ." 
    },
    { 
      numero: "02", 
      titulo: "Ação Estratégica", 
      descricao: "Ajuizamos o pedido para cessar a cobrança de 32% e garantir a aplicação imediata da alíquota de 8%." 
    },
    { 
      numero: "03", 
      titulo: "Cálculo de Créditos", 
      descricao: "Levantamos cada centavo pago a maior nos últimos 60 meses para solicitar a restituição integral." 
    },
    { 
      numero: "04", 
      titulo: "Segurança de Caixa", 
      descricao: "Implementamos a nova carga tributária reduzida, garantindo fôlego financeiro e conformidade legal total." 
    },
  ],

  // Casos / Jurisprudência (mínimo 2, máximo 4)
  casos: [
    { 
      processo: "5000234-62.2019.4.03.6110", 
      tribunal: "TRF-3 (São Paulo)", 
      resumo: "Clínica oftalmológica equiparada a hospital devido à presença de centro cirúrgico e estrutura complexa.", 
      resultado: "Redução de 32% para 8%" 
    },
    { 
      processo: "1005390-88.2019.4.01.3300", 
      tribunal: "TRF-1 (Bahia)", 
      resumo: "Reconhecimento de que a atividade médica hospitalar independe de internação para fins de isenção parcial.", 
      resultado: "Economia Confirmada" 
    },
    { 
      processo: "5001585-50.2020.4.04.7205", 
      tribunal: "TRF-4 (Sul)", 
      resumo: "Clínica com internação eventual e profissionais habilitados obtém rito hospitalar para IRPJ/CSLL.", 
      resultado: "Restituição de 5 Anos" 
    },
  ],

  // Requisitos
  requisitos: [
    "Optante pelo Lucro Presumido",
    "Prestação de serviços médicos hospitalares",
    "Estrutura técnico-operacional organizada",
    "Procedimentos cirúrgicos ou diagnósticos",
    "Corpo clínico fixo ou rotativo",
    "Atendimento às normas da ANVISA"
  ],
  documentos: [
    "Contrato Social e Alterações",
    "Cartão CNPJ Atualizado",
    "Alvará de Funcionamento e Sanitário",
    "Fotos da estrutura e salas de exames/cirurgia",
    "Relação de equipamentos e profissionais",
    "Declarações de IRPJ e CSLL (últimos 5 anos)"
  ],

  // Base legal (exatamente 3)
  baseLegal: [
    { 
      norma: "Lei 9.249/95", 
      artigo: "Art. 15, §1º, III", 
      descricao: "Estabelece a base de cálculo reduzida para serviços hospitalares no lucro presumido." 
    },
    { 
      norma: "Tema 162 STJ", 
      artigo: "Precedente", 
      descricao: "Define que o benefício se aplica a serviços vinculados à promoção da saúde, independentemente de internação." 
    },
    { 
      norma: "Constituição Federal", 
      artigo: "Isonomia Tributária", 
      descricao: "Garante tratamento igualitário a contribuintes que exercem atividades de mesma natureza." 
    },
  ],

  // CTA e WhatsApp
  beneficioPrincipal: "Recupere impostos pagos indevidamente e reduza sua carga tributária hoje mesmo.",
  mensagemWhatsApp: "Olá, tenho interesse na equiparação de clínicas médicas a hospitais.",
  whatsappLink: "https://wa.me/5511972732747?text=Envie%20esta%20mensagem%20como%20est%C3%A1%20para%20iniciar%20a%20conversa%20com%20o%20Atendente.%20Ol%C3%A1%2C%20tenho%20interesse%20na%20equipara%C3%A7%C3%A3o%20de%20cl%C3%ADnicas%20m%C3%A9dicas%20a%20hospitais.",
}
