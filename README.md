
# Clima tempo

![weather](.github/weather.png)

Projeto que consiste em consumir as API`s do OpenCageData, OpenWeatherMap e retornar o clima.

## :rocket: Tecnologias

- [Next.js](https://nextjs.org/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [Styled Components](https://www.styled-components.com/)
- [React Intl Universal](https://github.com/alibaba/react-intl-universal)

## Fluxo da aplicação

Projeto que consome a [OpenCageData API](https://opencagedata.com/api) para buscar a localização do usuário, porém precisa liberar o acesso do navegador, e o uso da [OpenWeatherMap API](https://openweathermap.org/api) que retorna o tempo e alguns detalhes no local determinando.
Pode ser pesquisado o local que deseja saber o clima ou clicar no ícone de localização no lado esquerdo, que ira buscar sua localização.
Pode ser utilizado em Inglês ou em Português.
A cor altera de acordo com a temperatura.
Se clicar na temperatura, ele altera entre celsius e fahrenheit.

### Acessando a aplicação

[Clique aqui para acessar](weather.desenvbr.com)


## Configurando ambiente

Clone o projeto

```bash
  git clone https://github.com/desenvbr/weather
```

Entre no diretório do projeto

```bash
  cd weather
```

Instale as dependências

```bash
  yarn install
```

Inicie o servidor

```bash
  yarn dev
```
Abra http://localhost:3000 no seu navegador para visualizar o projeto.

### API

Para a realização desse projeto foram utilizadas as seguintes serviços:
- [OpenCageData API](https://opencagedata.com/api)
- [OpenWeatherMap API](https://openweathermap.org/api)



