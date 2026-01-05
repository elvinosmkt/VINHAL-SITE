
import { Treatment, Course, Testimonial, GalleryItem } from './types';

export const WHATSAPP_NUMBER = "5547974009399";
export const INSTAGRAM_URL = "https://www.instagram.com/institutoacademicovinhal";
export const ADDRESS = "Av. Atlântica, 2440 - sala 12 - Centro, Balneário Camboriú - SC, 88330-907";

export const TREATMENTS: Treatment[] = [
  {
    id: '1',
    category: 'Rejuvenescimento Avançado',
    title: 'Protocolo BioLift IAV',
    price: 'Sob Consulta',
    shortDescription: 'Lifting biológico não invasivo com foco em sustentação e colágeno.',
    description: 'Nossa técnica exclusiva que combina bioestimuladores de colágeno e vetores de tração. O objetivo é restaurar o triângulo da juventude, tratando a flacidez sem alterar a fisionomia original do paciente.',
    benefits: ['Restauração do contorno mandibular', 'Estímulo de colágeno tipo I e III', 'Efeito natural e progressivo'],
    indications: 'Flacidez tissular, perda de sustentação facial e envelhecimento preventivo.',
    procedureInfo: 'Realizado com microcânulas em pontos estratégicos de ancoragem.',
    resultsTime: 'Melhora imediata com evolução contínua em até 90 dias.',
    afterCare: 'Evitar exposição solar intensa e exercícios de alto impacto por 48h.',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    category: 'Escultura Facial',
    title: 'Preenchimento Labial Artístico',
    price: 'Sob Consulta',
    shortDescription: 'Design labial personalizado focando em proporção, contorno e volume.',
    description: 'Mais que volume, buscamos equilíbrio. Utilizamos a técnica de escultura labial para definir o arco do cupido, suavizar assimetrias e proporcionar uma hidratação profunda com ácido hialurônico de alta pureza.',
    benefits: ['Volume controlado e elegante', 'Contorno definido', 'Hidratação e viço imediato'],
    indications: 'Lábios finos, perda de volume por idade ou busca por definição estética.',
    procedureInfo: 'Utilização de anestesia local completa para conforto total.',
    resultsTime: 'Visualizável na hora, com refinamento total em 15 dias.',
    afterCare: 'Aplicação de gelo e evitar manipular a região nas primeiras horas.',
    imageUrl: '/assets/treatments/lip_filler.png'
  },
  {
    id: '3',
    category: 'Tecnologia de Ponta',
    title: 'Remoção Laser Q-Switched',
    price: 'Sob Consulta',
    shortDescription: 'Eliminação segura de pigmentos de tatuagem e micropigmentação.',
    description: 'Protocolo de remoção que preserva a saúde da pele. Atua diretamente no pigmento através de pulsos ultrarrápidos, sendo ideal para quem busca remover trabalhos antigos ou clarear para cobertura.',
    benefits: ['Preservação dos folículos pilosos', 'Mínimo desconforto', 'Eficácia em cores escuras e saturadas'],
    indications: 'Tatuagens indesejadas ou micropigmentação de sobrancelhas/lábios saturada.',
    procedureInfo: 'Sessões periódicas com resfriamento dérmico simultâneo.',
    resultsTime: 'Clareamento progressivo visível a partir da segunda sessão.',
    afterCare: 'Uso de barreira protetora e fotoproteção rigorosa.',
    imageUrl: '/assets/treatments/laser_removal.png'
  },
  {
    id: '4',
    category: 'Suavização de Expressão',
    title: 'Toxina Botulínica Select',
    price: 'Sob Consulta',
    shortDescription: 'Tratamento de precisão para rugas dinâmicas e prevenção.',
    description: 'Aplicação estratégica voltada para a naturalidade do olhar. Tratamos desde as linhas de expressão tradicionais até protocolos avançados como o Microbotox para qualidade de pele e poros.',
    benefits: ['Aparência descansada', 'Prevenção de rugas profundas', 'Efeito "skin booster" colateral'],
    indications: 'Rugas na testa, glabela, "pés de galinha" e arqueamento de sobrancelha.',
    procedureInfo: 'Pontos de aplicação definidos por mapeamento muscular individual.',
    resultsTime: 'Início em 48h, com resultado final estabelecido em 15 dias.',
    afterCare: 'Não deitar ou baixar a cabeça por 4 horas após a aplicação.',
    imageUrl: '/assets/treatments/botox.png'
  },
  {
    id: '5',
    category: 'Tecnologia Avançada',
    title: 'Ultraformer MPT',
    price: 'Sob Consulta',
    shortDescription: 'Ultrassom micro e macrofocado de última geração para lifting e contorno.',
    description: 'O padrão ouro para tratamento de flacidez e gordura localizada. O Ultraformer MPT utiliza ondas de ultrassom para criar pontos de coagulação térmica, promovendo um efeito lifting imediato e a redução de medidas em áreas estratégicas do rosto e corpo.',
    benefits: ['Lifting facial sem cortes', 'Redução de papada e gordura localizada', 'Melhora imediata da firmeza da pele'],
    indications: 'Flacidez facial, gordura submentoniana (papada) e perda de definição do contorno.',
    procedureInfo: 'Não invasivo, realizado através de disparos controlados de ultrassom.',
    resultsTime: 'Efeito imediato com melhora progressiva em até 6 meses.',
    afterCare: 'Vida normal após o procedimento; pode ocorrer leve edema ou sensibilidade.',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    category: 'Laser & Textura',
    title: 'Lavieen BB Laser',
    price: 'Sob Consulta',
    shortDescription: 'O laser de Tulium que proporciona efeito "BB Cream" na pele.',
    description: 'Tratamento revolucionário para manchas (melasma), poros abertos e textura da pele. O Lavieen promove uma renovação dérmica suave, deixando a pele com brilho, uniformidade e aspecto de maquiagem natural permanente.',
    benefits: ['Tratamento de melasma e manchas', 'Fechamento de poros e melhora da textura', 'Brilho e uniformidade imediata (Glow)'],
    indications: 'Melasma, poros dilatados, cicatrizes de acne e pele sem viço.',
    procedureInfo: 'Laser de Tulium (1927nm) com baixo "downtime".',
    resultsTime: 'Pele visivelmente renovada em 5 a 7 dias.',
    afterCare: 'Fotoproteção rigorosa e hidratação específica recomendada.',
    imageUrl: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=800'
  }
];

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Formato Intensivo Injetáveis',
    shortDescription: 'Domine as técnicas fundamentais e avançadas de HOF com foco prático.',
    audience: 'Cirurgiões-Dentistas, Médicos, Farmacêuticos, Biomédicos e Enfermeiros Estetas',
    duration: 'Capacitação Intensiva',
    status: 'open',
    date: 'Próxima turma: 05 a 10 de Fevereiro 2026',
    details: [
      'Toxina botulínica de A a Z',
      'Bioestimuladores de colágeno (Scultra, Radiesse, Elleva)',
      'Preenchedores faciais (Técnicas de MD Codes e Harmonização)',
      'Gestão de intercorrências e segurança clínica',
      'Prática clínica em pacientes reais'
    ],
    price: '12x de R$ 750,00 ou R$ 7.500,00 à vista',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c2',
    title: 'Formato Intensivo Injetáveis + Tecnologias',
    shortDescription: 'A formação mais completa unindo o poder dos injetáveis com as tecnologias padrão ouro.',
    audience: 'Profissionais que buscam diferenciação máxima no mercado',
    duration: 'Imersão Presencial Completa',
    status: 'open',
    date: 'Próxima turma: 05 a 10 de Fevereiro 2026',
    details: [
      'Toxina Botulínica, Bioestimuladores e Preenchedores',
      'Ultraformer III / MPT: O poder do Ultrassom Microfocado',
      'Lavieen: O laser de Tulium que revolucionou o Skin Resurfacing',
      'ANATOMIA ITC: Estudo anatômico aplicado em cadáver fresco',
      'Aulas presenciais Hands-on'
    ],
    price: '12x de R$ 1.000,00 ou R$ 10.000,00 à vista',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c3',
    title: 'Pós-graduação em Harmonização Orofacial (MEC)',
    shortDescription: 'Especialização completa com certificação acadêmica e máxima carga horária.',
    audience: 'Graduados na área da saúde',
    duration: '360 horas no total',
    status: 'open',
    date: 'Início: 05 a 10 de Fevereiro 2026',
    details: [
      'Todo o conteúdo do Intensivo + Tecnologias incluído',
      '6 meses de aulas online exclusivas (teoria avançada)',
      'Corpo docente de referência nacional',
      'Marketing e Posicionamento Premium de Carreira',
      'Carga horária total de 360h com certificação MEC'
    ],
    price: 'Mensalidades de R$ 300,00 (Consulte taxas de matrícula)',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dra. Juliana M.',
    role: 'Aluna - Pós-Graduação',
    text: 'A didática do IAV é incomparável. Diferente de outros cursos onde só assistimos, aqui nós realmente colocamos a mão na massa. Sinto-me segura para qualquer intercorrência.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't2',
    name: 'Carolina S.',
    role: 'Paciente - BioLift',
    text: 'Fiz o BioLift e pareço 5 anos mais jovem, mas ninguém diz que fiz "procedimento". A naturalidade que a Dra. preza é o que me fidelizou. O ambiente é chiquérrimo.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't3',
    name: 'Dr. Roberto F.',
    role: 'Aluno - Mentoria VIP',
    text: 'A mentoria de lábios mudou meu faturamento. Aprendi técnicas de escultura labial que meus pacientes amam. O investimento se pagou no primeiro mês.',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', category: 'Labial', title: 'Escultura Labial', imageUrl: '/assets/gallery/lips_ba.png' },
  { id: 'g3', category: 'Full Face', title: 'Rejuvenescimento', imageUrl: '/assets/gallery/full_face_ba.png' },
  { id: 'g2', category: 'Bioestimulador', title: 'Contorno Facial', imageUrl: '/assets/gallery/contour_ba.png' },
  { id: 'g4', category: 'Toxina', title: 'Suavização de Rugas', imageUrl: '/assets/gallery/toxin_ba.png' },
];
