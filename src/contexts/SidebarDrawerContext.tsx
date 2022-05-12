import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { createContext, ReactNode, useContext, useEffect } from 'react';

type SideBarDrawerContextData = UseDisclosureReturn;

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData);

interface SideBarDrawerProviderProps {
  children: ReactNode;
}

export function SideBarDrawerProvider({
  children,
}: SideBarDrawerProviderProps): JSX.Element {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  );
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useSidebarDrawer = () => useContext(SideBarDrawerContext);
