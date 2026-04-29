import './globals.css'

export const metadata = {
  title: 'Filipe Neres Fernandes | Portfólio',
  description: 'Desenvolvedor Full Stack - Softwares personalizados',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
