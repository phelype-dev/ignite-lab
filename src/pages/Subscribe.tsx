import { GithubLogo, GoogleLogo } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import img from "/public/code_mockup.png";
export function Subscribe() {
 
const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, {loading}] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    
    if(name === "" || email === "") {
      alert("preencha os campos")
    }
    event.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
      },
    });
    
    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-center mt-20 mx-auto ">
        <div className="max-w[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relexed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14 "
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
            <button 
              onClick={handleSubscribe}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              Garantir minha vaga{" "}
            </button>

            <a href="https://github.com/login/oauth/authorize?scope=user&client_id=e9da15cb19ed50cbcc30" className="mt-4 bg-gray-500 p-4 flex items-center rounded font-bold text-sm hover:bg-gray-400 hover:text-gray-900 transition-colors"
              type="submit">
              <GithubLogo size={24} />
                Garantir vaga com GitHub{" "}
            </a>
          </form>
        </div>
      </div>
      <img src={img} className="mt-10" alt="" />
    </div> 
  );
}
