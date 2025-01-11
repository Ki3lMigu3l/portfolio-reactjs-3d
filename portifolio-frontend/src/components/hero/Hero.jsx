import React, {useState, useEffect} from 'react'
import './Hero.css'
import banner from '../../assets/banner-stacks.png'

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);
  
    const roles = [
      'FullStack Developer',
      'Frontend Developer',
      'Backend Developer',
      'Analista de Redes and NOC',
      'DevOps'
    ];
  
    useEffect(() => {
      const handleTyping = () => {
        const currentRole = roles[index];
        if (isDeleting) {
          setText((prev) => prev.slice(0, prev.length - 1)); 
          setTypingSpeed(50);
        } else {
          setText((prev) => currentRole.slice(0, prev.length + 1));
          setTypingSpeed(150);
        }
  
        if (!isDeleting && text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
  
        if (isDeleting && text === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      };
  
      const timer = setTimeout(handleTyping, typingSpeed);
  
      return () => clearTimeout(timer);
    }, [text, isDeleting, index, typingSpeed]);
  
    return (
      <div className='hero'>
         <h1>
          I'm Ezequiel Miguel,{' '}
          <span className="dynamic-text">{text}</span>
        </h1>
        <img src={banner} alt="Ezequiel Miguel" />
        <p>
        Sou estudante de Análise e Desenvolvimento de Sistemas na Uniasselvi, com 21 anos e mais de 2 anos de experiência em TI. Atualmente, atuo como Analista de Redes Nível 1 e membro do NOC na InforNetwork, onde continuo expandindo minhas habilidades. Tenho experiência prática em redes, monitoramento de infraestrutura e no desenvolvimento de soluções FullStack, liderando projetos do início ao fim.
        </p>
      </div>
    );
  };
  
  export default Hero;
