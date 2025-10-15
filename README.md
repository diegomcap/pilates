# 🧘‍♀️ Pilates Studio Website

Um site moderno e responsivo para estúdio de Pilates, desenvolvido com React, Vite e Tailwind CSS. O site oferece uma experiência multilíngue completa (Português, Inglês e Árabe) e apresenta informações sobre aulas, instrutores, galeria e sistema de agendamento.

## ✨ Características

- 🌐 **Multilíngue**: Suporte completo para Português, Inglês e Árabe
- 📱 **Responsivo**: Design adaptável para todos os dispositivos
- 🎥 **Galeria Interativa**: Vídeos e imagens do estúdio e aulas
- 👨‍🏫 **Perfis de Instrutores**: Informações detalhadas sobre cada instrutor
- 📅 **Sistema de Agendamento**: Integração com WhatsApp e email
- ♿ **Acessibilidade**: Componentes acessíveis e navegação por teclado
- 🎨 **Animações Suaves**: Transições e animações com Framer Motion
- 🚀 **Performance Otimizada**: Carregamento rápido e otimizado

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server ultra-rápido
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos
- **React Intersection Observer** - Detecção de elementos visíveis

## 📦 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_SEU_REPOSITORIO]
cd site
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## 🚀 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção localmente
- `npm run lint` - Executa o linter ESLint

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── ClassesSection.jsx
│   ├── InstructorsSection.jsx
│   ├── GallerySection.jsx
│   ├── TestimonialsSection.jsx
│   ├── ContactSection.jsx
│   ├── BookingSection.jsx
│   ├── Footer.jsx
│   └── AccessibleVideoPlayer.jsx
├── utils/               # Utilitários
├── translations.js      # Traduções multilíngue
├── App.jsx             # Componente principal
├── main.jsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🌍 Idiomas Suportados

- 🇧🇷 **Português** - Idioma padrão
- 🇺🇸 **Inglês** - English
- 🇦🇪 **Árabe** - العربية

## 📞 Informações de Contato

O site inclui informações de contato configuráveis:
- **Telefone**: +971 58 528 7670
- **Email**: agenda@healthcenter.ae
- **Localização**: Abu Dhabi, UAE

## 🎨 Personalização

### Cores e Tema
As cores principais podem ser personalizadas no arquivo `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Suas cores personalizadas
      }
    }
  }
}
```

### Traduções
Adicione ou modifique traduções no arquivo `src/translations.js`.

### Conteúdo
Personalize o conteúdo editando os componentes em `src/components/`.

## 🚀 Deploy

### Build para Produção
```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Deploy Sugerido
- **Vercel**: Conecte seu repositório GitHub para deploy automático
- **Netlify**: Arraste a pasta `dist` ou conecte o repositório
- **GitHub Pages**: Use GitHub Actions para deploy automático

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📞 Suporte

Se você tiver alguma dúvida ou problema, sinta-se à vontade para abrir uma issue no GitHub.

---

Desenvolvido com ❤️ para transformar vidas através do Pilates.
