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

const genericSyntoms = [
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
    description: "Fraqueza muscular ou miastenia é uma perda de força muscular.",
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
    description: "Dor abdominal pode ser um sintoma associado a distúrbios transitórios ou a doenças mais graves.",
    classification: "R10",
    type_id: genericType.id,
  },
  {
    name: "Dor torácica",
    description: "Dor torácica é a sensação de dor ou desconforto , localizada na região anterior do tórax.",
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

module.exports = {
  genericSyntoms,
};
