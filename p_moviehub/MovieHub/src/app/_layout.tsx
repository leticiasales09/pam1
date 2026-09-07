import { Tabs } from "expo-router";
import { useEffect, useState } from "react";
import { MovieProvider } from "../contexts/MovieContext";
import Splash from "./splash";

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MovieProvider>
      {showSplash ? (
        <Splash />
      ) : (
        <Tabs>
          <Tabs.Screen
            name="index"
            options={{
              title: "Filmes",
              tabBarLabel: "Filmes",
            }}
          />

          <Tabs.Screen
            name="add-movie"
            options={{
              title: "Adicionar",
              tabBarLabel: "Adicionar",
            }}
          />

          <Tabs.Screen
            name="movie-details"
            options={{
            href: null,
            title: "Detalhes do Filme",
            }}
          />

          <Tabs.Screen
            name="splash"
            options={{
            href: null,
            }}
          />
        </Tabs>
      )}
    </MovieProvider>
  );
}