import type { NextPage } from 'next'
import { useState } from 'react'
import { Header } from '../components/Header';
import { executeRequest } from '../services/api';
import { AccessTokenProps } from '../types/AccessTokenProps';

const Home: NextPage<AccessTokenProps> = ({ setAccessToken }) => {
  
  const sair = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    setAccessToken('');
  }

  return (
    <>
      <Header sair={sair}/>
    </>
  )
}

export { Home }