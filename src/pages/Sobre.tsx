import React from 'react';
import { Shield, Users, Award, Target } from 'lucide-react';

const stats = [
  { label: 'Anos no mercado', value: '1+' },
  { label: 'Clientes satisfeitos', value: '50k+' },
  { label: 'Produtos vendidos', value: '100k+' },
  { label: 'Avaliação média', value: '4.9' },
];

const values = [
  {
    icon: Shield,
    title: 'Qualidade Garantida',
    description: 'Comprometimento com produtos de alta qualidade e durabilidade.'
  },
  {
    icon: Users,
    title: 'Foco no Cliente',
    description: 'Atendimento personalizado e suporte pós-venda excepcional.'
  },
  {
    icon: Award,
    title: 'Excelência',
    description: 'Busca constante pela perfeição em todos os aspectos.'
  },
  {
    icon: Target,
    title: 'Inovação',
    description: 'Sempre em busca das últimas tendências e tecnologias.'
  }
];

const team = [
  {
    name: 'Hélder Alves',
    role: 'CEO & Fundador',
    image: 'https://github.com/Heldet-37.png',
    description: 'Especialista em tecnologia com mais de 3 anos de experiência no mercado de acessórios para smartphones.'
  },
  {
    name: 'Luciano Manuel',
    role: 'Diretor de Produtos',
    image: 'https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-1/466974005_427283190427678_4677484667889820095_n.jpg?stp=c0.0.768.768a_dst-jpg_s160x160_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFYIRfEDATKct4y0jFBjlGrIetVGMMLupAh61UYwwu6kN-gJR5J3h8C-phJs5uOVtSk5c_HChVd3DDvNzuKki9D&_nc_ohc=veu35nL2DCMQ7kNvgFbg-RG&_nc_zt=24&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AMSh_18S1ZaVNDzvmU_RCsU&oh=00_AYBPTnEmSuWBW71sapzIhGd6ZfIeElGtJOCarkB_-lvuPQ&oe=6793F902',
    description: 'Responsável pela curadoria e desenvolvimento de nossa linha de produtos premium.'
  },
  {
    name: 'Saide Marrapaz',
    role: 'Investidor',
    image: 'https://vuchada.com/R/assets/img/gallery/gallery-1.jpg',
    description: 'Investidor comprometido em oferecer experiências excepcionais aos clientes, alinhando estratégias financeiras às necessidades individuais.'
  }
];

export default function Sobre() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1920"
            alt="Background"
          />
          <div className="absolute inset-0 bg-emerald-900/80 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sobre a PrimeCell
          </h1>
          <p className="mt-6 text-xl text-emerald-100 max-w-3xl">
            Desde 2024, nos dedicamos a fornecer os melhores acessórios para smartphones, combinando qualidade premium, atendimento excepcional e inovação constante.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-emerald-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-2 text-emerald-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* História Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Nossa História</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            A PrimeCell nasceu da paixão por tecnologia e da percepção de que os usuários de smartphones mereciam acessórios de qualidade superior. Nossa jornada começou em 2024, em uma pequena loja na cidade de Gurùé, e desde então crescemos para nos tornar uma referência nacional em acessórios premium para celulares.
          </p>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Ao longo do ano 2024, estabelecemos parcerias com os principais fabricantes globais, desenvolvemos produtos exclusivos e construímos uma base fiel de clientes que compartilham nossa busca pela excelência.
          </p>
        </div>
      </div>

      {/* Valores Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-16">Nossos Valores</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-16">Nossa Equipe</h2>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <img
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-emerald-600 font-medium">{member.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-500">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}