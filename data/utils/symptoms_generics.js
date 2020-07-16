const {
  cardiovascularType,
  genericType,
  gastrointestinalType,
  integumentaryType,
  neurologicalType,
  ophthalmologicalType,
  pulmonaryType,
  urologicalType,
} = require("./types");

const genericSymptoms = [
  {
    name: "Caquexia",
    description:
      "é uma síndrome complexa e multifatorial que se caracteriza pela perda de peso, atrofia muscular, fadiga, fraqueza e significante perda de apetite em pessoas que não estão ativamente tentando perder peso.",
    classification: "R64",
    type_id: genericType.id,
  },
  {
    name: "Perda de apetite",
    description:
      "é a perda ou ausência de apetite também usada como sinônimo de hiporexia villa (hipo menos + orexis apetite), diminuição do apetite.",
    classification: "R63.0",
    type_id: genericType.id,
  },
  {
    name: "Perda de peso",
    description:
      "Perda de peso, no contexto da medicina, é a redução do peso corporal total, que pode acontecer devido à perda de fluidos, massa muscular, massa óssea ou gordura. Nem sempre a perda de peso é algo desejado, sendo desta forma, sinal de alerta para algum problema de saúde.",
    classification: "R63.4",
    type_id: genericType.id,
  },
  {
    name: "Ganho de peso",
    description:
      "O ganho de peso acontece de forma rápida e inesperada, principalmente, pode ser considerado um sintoma com relação a alguma doença.",
    classification: "R63.5",
    type_id: genericType.id,
  },
  {
    name: "Boca seca",
    description:
      "A xerostomia (também conhecida como boca seca ou secura da boca) é um sintoma relacionado à falta de saliva.",
    classification: "R68.2",
    type_id: genericType.id,
  },
  {
    name: "Fadiga/Cansaço",
    description:
      "A palavra fadiga (ou também cansaço) é usada cotidianamente para descrever uma série de males subjetivos intrínsecos que vão desde um estado genérico de letargia até uma sensação específica de calor nos músculos provocada pelo trabalho intenso.",
    classification: "R53",
    type_id: genericType.id,
  },
  {
    name: "Fraqueza muscular",
    description:
      "Fraqueza muscular ou miastenia é uma perda de força muscular.",
    classification: "M62.8",
    type_id: genericType.id,
  },
  {
    name: "Febre",
    description: "Aumento temporário da temperatura corporal média de 37°C.",
    classification: "R50",
    type_id: genericType.id,
  },
  {
    name: "Icterícia",
    description:
      "Icterícia é a pigmentação amarela ou verde da pele e da parte branca do olho causada por níveis elevados de bilirrubina no sangue.",
    classification: "(P58, P59, R17)",
    type_id: genericType.id,
  },
  {
    name: "Dor",
    description:
      "A dor é um sentimento angustiante, muitas vezes causado por estímulos intensos ou prejudiciais, como colidir um dedo do pé, queimar um dedo ou colocar álcool em um corte.",
    classification: "R52",
    type_id: genericType.id,
  },
  {
    name: "Dor abdominal",
    description:
      "Dor abdominal pode ser um sintoma associado a distúrbios transitórios ou a doenças mais graves.",
    classification: "R10",
    type_id: genericType.id,
  },
  {
    name: "Dor torácica",
    description:
      "Dor torácica é a sensação de dor ou desconforto , localizada na região anterior do tórax.",
    classification: "R07",
    type_id: genericType.id,
  },
  {
    name: "Hematoma",
    description:
      "Sangue ou sangramento sob a pele devido a trauma físico de qualquer tipo; normalmente preto e azul no início, mudando de cor conforme a evolução da cura.",
    classification: "T81.0",
    type_id: genericType.id,
  },
  {
    name: "Sangramento nasal",
    description:
      "Os sangramentos nasais são devido à ruptura de um vaso sanguíneo dentro da mucosa nasal. A ruptura pode ser espontânea ou iniciadas por trauma.",
    classification: "R04.0",
    type_id: genericType.id,
  },
  {
    name: "Tremor",
    description:
      "Tremor é um movimento muscular involuntário, de certa forma rítmico, que envolve movimentações oscilatórias de uma ou mais partes do corpo.",
    classification: "R25.1",
    type_id: genericType.id,
  },
  {
    name: "Convulsão",
    description:
      "Convulsão é uma manifestação de um fenômeno eletrofisiológico anormal temporário que ocorre no cérebro (descarga bioenergética) e que resulta numa sincronização anormal da atividade elétrica neuronal.",
    classification: "R56",
    type_id: genericType.id,
  },
  {
    name: "Cãibra",
    description:
      "As cãibras ou câimbras são contrações involuntárias de um músculo esquelético. São frequentes durante a noite, ou em exercícios físicos extenuantes, em pessoas que não possuem condicionamento físico adequado.",
    classification: "R25.2",
    type_id: genericType.id,
  },
  {
    name: "Acufeno/Zumbido/Tinido",
    description:
      "Acufeno, zumbido ou tinido é a sensação de ouvir som na ausência de qualquer som externo. Embora muitas vezes descrito como semelhante a um zumbido no ouvido, pode também assemelhar-se a um tinido, sibilo ou rugido.",
    classification: "R25.2",
    type_id: genericType.id,
  },
  {
    name: "Tontura/Vertigem",
    description:
      "Tontura é um termo genérico que representa a sensação de desequilíbrio. Já vertigem é quando uma pessoa sente que ela ou os objetos à sua volta se encontram em movimento quando na realidade não estão.",
    classification: "R42",
    type_id: genericType.id,
  },
  {
    name: "Desmaio",
    description:
      "É a perda momentânea de consciência e da postura erecta, caracterizada por ser de aparecimento súbito, curta duração e recuperação espontânea.",
    classification: "R15",
    type_id: genericType.id,
  },
  {
    name: "Cataplexia",
    description:
      "A cataplexia designa, em medicina, a atonia muscular súbita que provoca a queda do doente, que fica consciente, mas incapaz de falar ou de se mexer, o que é considerado uma experiência assustadora e desagradável.",
    classification: "G47.4",
    type_id: genericType.id,
  },
  {
    name: "Hipotermia",
    description:
      "Hipotermia é a temperatura corporal reduzida que acontece quando um corpo dissipa mais calor do que produz internamente durante tempo suficientemente prolongado. Nos seres humanos, é definida como uma temperatura padrão do corpo abaixo de 35.0 ºC (95.0 ºF).",
    classification: "T68",
    type_id: genericType.id,
  },
];

const neurologicalSymptoms = [
  {
    name: "Ansiedade",
    description:
      "A ansiedade é uma emoção caracterizada por um estado desagradável de agitação interior, muitas vezes acompanhada de comportamento nervoso, como o de se embalar de trás para a frente.",
    classification: "",
    type_id: neurologicalType.id,
  },
  {
    name: "Ataxia",
    description:
      "Ataxia ou distaxia é um transtorno neurológico caracterizado pela falta de coordenação de movimentos musculares voluntários e de equilíbrio . É normalmente associada a uma degeneração ou bloqueio de áreas específicas do cérebro e cerebelo.",
    classification: "",
    type_id: neurologicalType.id,
  },
  {
    name: "Catatonia",
    description:
      "A Catatonia é uma perturbação do comportamento motor que pode ter tanto uma causa psicológica ou neurológica. A sua forma mais conhecida envolve uma posição rígida e imóvel que pode durar horas, dias ou semanas. Mas também pode se referir a agitação motora sem propósito mesmo sem estímulos ambientais. Uma forma menos extrema de catatonia envolve atividade motora muito lenta.",
    classification: "F20.2",
    type_id: neurologicalType.id,
  },
  {
    name: "Disartria",
    description:
      "Disartria é uma perturbação neurológica caracterizada pela dificuldade em articular as palavras de maneira correta.",
    classification: "",
    type_id: neurologicalType.id,
  },
  {
    name: "Sonolência",
    description:
      "A sonolência é um estado de forte desejo de dormir ou de dormir por períodos anormalmente longos.",
    classification: "R40.0",
    type_id: neurologicalType.id,
  },
  {
    name: "Insônia",
    description:
      "é um distúrbio do sono caracterizado por dificuldades em adormecer ou manter-se adormecido durante o tempo desejado.",
    classification: "F51.0",
    type_id: neurologicalType.id,
  },
];

const ophthalmologicalSymptoms = [
  {
    name: "Visão embaçada",
    description:
      "A visão turva pode não ser causadas por doenças subjacentes. Algumas causas comuns incluem esfregar os olhos, secura nos olhos, choro, envelhecimento ou óculos de grau inadequado.",
    classification: "",
    type_id: ophthalmologicalType.id,
  },
  {
    name: "Visão dupla",
    description:
      "Diplopia, mais conhecido como visão dupla, é a percepção de duas imagens a partir de um único objeto. As imagens podem estar na horizontal, vertical ou diagonal.",
    classification: "H53.2",
    type_id: ophthalmologicalType.id,
  },
  {
    name: "Midríase",
    description:
      "Midríase é a dilatação da pupila em função da contração do músculo dilatador da pupila.",
    classification: "H570",
    type_id: ophthalmologicalType.id,
  },
  {
    name: "Miose",
    description:
      "Miose é um termo médico para a constrição (diminuição do diâmetro) da pupila.",
    classification: "H570",
    type_id: ophthalmologicalType.id,
  },
  {
    name: "Nistagmo",
    description:
      "Nistagmo são oscilações repetidas e involuntárias rítmicas de um ou ambos os olhos em algumas ou todas as posições de mirada.",
    classification: "",
    type_id: ophthalmologicalType.id,
  },
];

const gastrointestinalSymptoms = [
  {
    name: "Anorexia",
    description:
      "Anorexia é a perda ou ausência de apetite também usada como sinônimo de hiporexia villa, diminuição do apetite. Não deve ser confundida com anorexia nervosa, que é um transtorno alimentar em que ocorre recusa constante de alimentos mesmo quando se sente fome.",
    classification: "R63.0",
    type_id: gastrointestinalType.id,
  },
  {
    name: "Inchaço",
    description:
      "Em medicina, turgidez, turgência, turgescência ou inchaço são termos que designam o aumento da dimensão de um ou mais órgãos, causado pelo acúmulo excessivo de fluidos nos tecidos, denominado de edema.",
    classification: "R14",
    type_id: gastrointestinalType.id,
  },
  {
    name: "Arrotos",
    description:
      "Arroto (nome vulgar para eructação), frequentemente acompanhada de som característico, ocorre quando gases do estômago são expelidos através da boca.",
    classification: "R14",
    type_id: gastrointestinalType.id,
  },
  {
    name: "Sangue nas fezes",
    description:
      "Melena refere-se ao sangue já oxidado nas fezes, por ter origem em hemorragias no trato digestivo alto. Com isso, há escurecimento das fezes, além de fetidez.",
    classification: "K92.1",
    type_id: gastrointestinalType.id,
  },
  {
    name: "Constipação",
    description:
      "Quando uma pessoa evacua menos de três vezes por semana ou tem dificuldade para evacuar.",
    classification: "K59.0",
    type_id: gastrointestinalType.id,
  },
  {
    name: "Diarreia",
    description:
      "Diarreia é a condição médica em que se verificam pelo menos três movimentos intestinais aquosos ou pouco consistentes por dia. Geralmente tem a duração de alguns dias e pode causar desidratação, devido à grande perda de líquidos nas fezes.",
    classification: "K58",
    type_id: gastrointestinalType.id,
  },
  {
    name: "Disfagia",
    description:
      "A disfagia pode ser definida como dificuldade de deglutição (ato de engolir alimentos).",
    classification: "R13",
    type_id: gastrointestinalType.id,
  },
  {
    name: "Constipação",
    description:
      'é um termo médico que designa "dificuldade de digestão", popularmente conhecida como "indigestão".',
    classification: "K30",
    type_id: gastrointestinalType.id,
  },
  {
    name: "Flatulência",
    description:
      "é uma ventosidade anal que pode ser ruidosa ou não e que tem um cheiro fétido.",
    classification: "R14",
    type_id: gastrointestinalType.id,
  },
  {
    name: "Náusea",
    description:
      "Náusea ou enjoo é uma sensação desagradável e difusa de desconforto e mal-estar, que em muitos casos se manifesta por vontade em vomitar.",
    classification: "R11",
    type_id: gastrointestinalType.id,
  },
  {
    name: "Azia",
    description:
      "é a sensação de ardor (queimação), que tem início na parte posterior do esterno e que se propaga através de ondas ou golfadas, até a faringe, fazendo-se acompanhar de eructação com acidez e aumento da salivação.",
    classification: "R12",
    type_id: gastrointestinalType.id,
  },
  {
    name: "Vômito",
    description:
      " a expulsão ativa do conteúdo gástrico pela boca. O vómito é ao mesmo tempo um sinal e um sintoma bastante desagradável que pode assustar muito a pessoa atingida.",
    classification: "R11",
    type_id: gastrointestinalType.id,
  },
];

const cardiovascularSymptoms = [
  {
    name: "Dor no peito",
    description:
      "Desconforto no peito, incluindo uma dor incômoda, sensação de esmagamento ou ardor, dor lancinante e dor que se irradia para o pescoço ou ombro.",
    classification: "R07",
    type_id: cardiovascularType.id,
  },
  {
    name: "Claudicação",
    description:
      "é um termo médico usado geralmente para se referir ao comprometimento da capacidade de caminhar (marcha), seja por dor, desconforto, dormência ou cansaço nas pernas que piora progressivamente durante uma caminhada e é aliviado pelo repouso.",
    classification: "",
    type_id: cardiovascularType.id,
  },
  {
    name: "Palpitação",
    description:
      "O termo palpitação designa a sensação de consciência do batimento do coração, que habitualmente não se sente.",
    classification: "R00.2",
    type_id: cardiovascularType.id,
  },
  {
    name: "Taquicardia",
    description:
      "Taquicardia é um termo médico utilizado para designar um aumento da frequência cardíaca. Convenciona-se como normal no ser humano uma frequência cardíaca entre 60 e 100 batimentos por minuto. A partir de 100, inclusive, considera-se que há taquicardia.",
    classification: "R00.0",
    type_id: cardiovascularType.id,
  },
  {
    name: "Bradicardia",
    description:
      "Bradicardia é um termo utilizado na medicina para designar uma diminuição na frequência cardíaca. Convenciona-se como normal no ser humano uma frequência cardíaca entre 60 e 100 batimentos por minuto. Frequências abaixo de 60 constituem a bradicardia.",
    classification: "R00.1",
    type_id: cardiovascularType.id,
  },
  {
    name: "Arritmia",
    description:
      "Arritmia cardíaca é um grupo de condições em que o batimento cardíaco é irregular, demasiado rápido ou demasiado lento.",
    classification: "",
    type_id: cardiovascularType.id,
  },
  {
    name: "Reticulocitose",
    description:
      "Reticulocitose é condição anômala do tecido sangüíneo, caracterizada pelo aumento na contagem dos reticulócitos circulantes, condição reputada entre os mais simples e os mais confiáveis sinais hematológicos da produção acelerada de eritrócitos.",
    classification: "",
    type_id: cardiovascularType.id,
  },
  {
    name: "Macrocitose",
    description:
      "é um termo médico para glóbulos vermelhos maiores que o normal, mais especificamente com volume corpuscular médio maior que 100 femtolitros (10^-15L).",
    classification: "D75.8",
    type_id: cardiovascularType.id,
  },
];

const urologicalSymptoms = [
  {
    name: "Disúria",
    description:
      "Disúria refere-se à dificuldade para urinar. As causas podem ser obstrutivas ou inflamatórias com acometimento do trato urinário inferior. Disúria pode estar associada à algúria, que é a sensação dolorosa causada pelo ato de urinar.",
    classification: "R30.0",
    type_id: urologicalType.id,
  },
  {
    name: "Poliúria",
    description:
      "termo médico que faz referência ao sintoma de urinar em excesso (acima de 2,5 litros por dia), frequentemente acompanhado de um aumento da frequência urinária (polaquiuria).",
    classification: "R35",
    type_id: urologicalType.id,
  },
  {
    name: "Hematúria",
    description:
      "Hematúria é a presença de sangue na urina. Tem como definição mais exata a presença de cinco ou mais eritrócitos (hemácias) por campo na análise microscópica do sedimento urinário, e deve ser confirmada em pelo menos duas amostras de urina.",
    classification: "R31",
    type_id: urologicalType.id,
  },
  {
    name: "Incontinência urinária",
    description:
      "De forma geral a incontinência urinária (ou IU) é definida como a perda involuntária de urina. É um problema frequente, incomodativo e que provoca constrangimento, tendo grande impacto na qualidade de vida.",
    classification: "R32",
    type_id: urologicalType.id,
  },
  {
    name: "Disfunção erétil",
    description:
      "A disfunção erétil é a incapacidade de manter o pênis ereto para uma satisfatória relação sexual.",
    classification: "N48.4",
    type_id: urologicalType.id,
  },
];

const integumentarySymptoms = [
  {
    name: "Hipoventilação",
    description:
      "Na medicina, hipoventilação ocorre quando a ventilação é inadequada para realizar a troca de gases nos pulmões.",
    classification: "",
    type_id: integumentaryType.id,
  },
  {
    name: "Hiperventilação",
    description:
      "Hiperventilação é a condição que se estabelece quando a ventilação pulmonar é maior que a necessária para a eliminação de CO2. Em outros termos, é um acréscimo anormal da quantidade de ar que ventila os pulmões, seja pelo aumento da frequência ou da intensidade da respiração.",
    classification: "",
    type_id: integumentaryType.id,
  },
  {
    name: "Bradipneia",
    description:
      "Bradipneia refere-se a uma taxa de respiração mais lenta que o saudável. A taxa em que é diagnosticada bradipneia depende da idade do paciente e do nível de atividade física recente. É o oposto de taquipneia, respiração acelerada e pode agravar para apneia, nenhuma respiração.",
    classification: "",
    type_id: integumentaryType.id,
  },
  {
    name: "Apneia",
    description:
      "esigna a suspensão voluntária ou involuntária da ventilação, ou a interrupção da comunicação do ar atmosférico com as vias aéreas inferiores e pulmões.",
    classification: "",
    type_id: integumentaryType.id,
  },
  {
    name: "Tosse",
    description:
      "A tosse é uma contração espasmósdica, repentina e frequentemente repetitiva da cavidade torácica, resultando em uma violenta expulsão de ar dos pulmões, e geralmente acompanhada por um som característico.",
    classification: "",
    type_id: integumentaryType.id,
  },
  {
    name: "Dispneia",
    description:
      "Dispneia também chamada de falta de ar é um sintoma no qual a pessoa tem dificuldade em respirar, normalmente com a sensação de respiração incompleta, muitas vezes acompanhada de opressão torácica e mal estar.",
    classification: "",
    type_id: integumentaryType.id,
  },
  {
    name: "Hemoptise",
    description:
      "Hemoptise é a expulsão sanguínea ou sanguinolenta através da tosse, proveniente de hemorragia na árvore respiratória. É comum a várias doenças cardíacas e pulmonares.",
    classification: "",
    type_id: integumentaryType.id,
  },
  {
    name: "Pleurisia",
    description:
      "Pleurisia, também denominada pleurite, é uma inflamação da membrana que envolve os pulmões e reveste a cavidade torácica, denominada pleura.",
    classification: "",
    type_id: integumentaryType.id,
  },
  {
    name: "Catarro",
    description:
      "Sputa, sputum, esputo,[1] ou, mais popularmente, escarro[2] ou catarro, é o muco que é expelido das vias aéreas inferiores.",
    classification: "",
    type_id: integumentaryType.id,
  },
  {
    name: "Taquipneia",
    description:
      "Taquipneia é o aumento do número de incursões respiratórias por unidade de tempo, de forma anormal, gerando movimentos dos órgãos respiratórios semelhantes aos produzidos por esforços físicos violentos.",
    classification: "",
    type_id: integumentaryType.id,
  },
];

const pulmonarySymptoms = [
  {
    name: "Brotoeja",
    description:
      "Brotoeja é o nome popular da miliária, uma dermatite inflamatória causada pela obstrução mecânica à eliminação do suor pelas glândulas sudoríparas (écrinas) e que acaba impedindo a saída do suor do corpo.",
    classification: "R21",
    type_id: pulmonaryType.id,
  },
  {
    name: "Coceira",
    description:
      "O prurido, designado também por coceira ou comichão, corresponde a uma sensação desagradável causada por doenças ou agentes irritantes, que levam o indivíduo a coçar-se em procura de alívio, e constitui uma das queixas mais comuns dentro das patologias dermatológicas.",
    classification: "L29",
    type_id: pulmonaryType.id,
  },
  {
    name: "Edema",
    description:
      "Edema, denominado popularmente por retenção de líquidos, é a acumulação de líquidos nos tecidos do corpo.[1] As regiões afetadas com maior frequência são os braços ou as pernas.",
    classification: "R60",
    type_id: pulmonaryType.id,
  },
  {
    name: "Anasarca",
    description:
      "Anasarca (Do grego ana, mudança, afastamento + sarkós, carne) é um sintoma caracterizado por um edema (inchaço) distribuído por todo o corpo devido ao acúmulo de fluido no espaço extracelular. Geralmente causado por insuficiência cardíaca ou renal",
    classification: "R60.1",
    type_id: pulmonaryType.id,
  },
  {
    name: "Urticária",
    description:
      "Urticária é uma reação alérgica da pele caracterizada pela erupção de pápulas salientes, avermelhadas e muito pruriginosas.",
    classification: "L50",
    type_id: pulmonaryType.id,
  },
  {
    name: "Parestesia",
    description:
      "Parestesias são sensações cutâneas subjetivas (ex., frio, calor, formigamento, agulhadas, adormecimento, pressão etc.) que são vivenciadas espontaneamente na ausência de estimulação. Podem ocorrer caso algum nervo sensorial seja afetado, seja por contato ou pelo rompimento das terminações nervosas.",
    classification: "R20.2",
    type_id: pulmonaryType.id,
  },
];

module.exports = {
  genericSymptoms,
  neurologicalSymptoms,
  ophthalmologicalSymptoms,
  gastrointestinalSymptoms,
  cardiovascularSymptoms,
  urologicalSymptoms,
  pulmonarySymptoms,
  integumentarySymptoms,
};
