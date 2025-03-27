"use client";

import { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudMoon,
  CloudMoonRain,
  CloudSnow,
  CloudSun,
  CloudSunRain,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { Toggle } from "../ui/toggle";
import { useQuery } from "@tanstack/react-query";
import { getTemperature } from "@/lib/utils";

const weatherImages = {
  Clear: {
    day: <Sun strokeWidth={1.35} />,
    night: <Moon strokeWidth={1.35} />,
  },
  Clouds: {
    day: <CloudSun strokeWidth={1.35} />,
    night: <CloudMoon strokeWidth={1.35} />,
  },
  Rain: {
    day: <CloudSunRain strokeWidth={1.35} />,
    night: <CloudMoonRain strokeWidth={1.35} />,
  },
  Drizzle: {
    day: <CloudDrizzle strokeWidth={1.35} />,
    night: <CloudDrizzle strokeWidth={1.35} />,
  },
  Thunderstorm: {
    day: <CloudLightning strokeWidth={1.35} />,
    night: <CloudLightning strokeWidth={1.35} />,
  },
  Snow: {
    day: <CloudSnow strokeWidth={1.35} />,
    night: <CloudSnow strokeWidth={1.35} />,
  },
  Fog: {
    day: <CloudFog strokeWidth={1.35} />,
    night: <CloudFog strokeWidth={1.35} />,
  },
};

export interface WeatherData {
  weather: { main: keyof typeof weatherImages }[];
  main: {
    temp: number;
  };
  name: string;
  sys: {
    sunrise: number;
    sunset: number;
  };
  dt: number;
}

interface Coordinates {
  lat: number;
  lon: number;
}

export default function WeatherDisplay({ onRemove }: { onRemove: () => void }) {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  const getUserLocation = useCallback(async () => {
    try {
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          });
        }
      );

      const newCoords = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };

      setCoordinates(newCoords);
      localStorage.setItem("lastLocation", JSON.stringify(newCoords));
    } catch (err) {
      console.error("Error getting location:", err);

      // Try to use last saved location
      const lastLocation = localStorage.getItem("lastLocation");
      if (lastLocation) {
        setCoordinates(JSON.parse(lastLocation));
      } else {
        // Default fallback coordinates
        setCoordinates({ lat: 27.7172, lon: 85.324 });
      }
    }
  }, []);

  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);

  const { data: weather, error } = useQuery<WeatherData, Error>({
    queryKey: ["weather", coordinates?.lat, coordinates?.lon],
    queryFn: async () => {
      if (!coordinates) throw new Error("No coordinates available");
      const api_key = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${api_key}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    },
    enabled: !!coordinates, // Only run query when coordinates are available
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep unused data in cache for 10 minutes
  });

  const isDaytime = (sunrise: number, sunset: number, current: number) => {
    return current >= sunrise && current < sunset;
  };
  const weatherCondition = weather?.weather[0].main || "Clouds";
  const timeOfDay = weather
    ? isDaytime(weather.sys.sunrise, weather.sys.sunset, weather.dt)
      ? "day"
      : "night"
    : "day";
  const weatherImage = weatherImages[weatherCondition]
    ? (weatherImages[weatherCondition] as { day: any; night: any })[timeOfDay]
    : weatherImages["Clouds"].day;

  const toggleTemperatureUnit = () => {
    setIsFahrenheit(!isFahrenheit);
  };

  return (
    <Card className='shadow-none relative h-full flex dark:bg-[hsl(240,3%,27%)] bg-[#eeeee4] border dark:border-neutral-400 dark:hover:border-neutral-100 border-neutral-400 hover:border-neutral-300 text-gray-800 overflow-hidden'>
      <CardContent className='flex flex-col items-start text-start h-full p-2 gap-1 w-full'>
        <div className='flex items-center justify-between gap-4'>
          <div className='w-full flex text-base gap-2 justify-between items-center text-gray-600 dark:text-gray-400'>
            {weatherImage}
            <span>{weatherCondition}</span>
          </div>
          <Toggle
            pressed={isFahrenheit}
            onPressedChange={toggleTemperatureUnit}
            aria-label='Toggle temperature unit'
            className='text-gray-600 dark:text-gray-400 absolute bottom-1 right-1 flex !justify-center !bg-[#bfc1c738] !h-6 !items-center rounded-lg min-w-6 !p-1'
          >
            {isFahrenheit ? "°C" : "°F"}
          </Toggle>
          <div className='absolute right-0 top-0'>
            <Button
              variant='ghost'
              size='icon'
              onClick={onRemove}
              className='text-gray-600 dark:text-gray-400 h-2 w-2 p-3 rounded-full hover:text-gray-800 hover:bg-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-400'
            >
              <X className='h-4 w-4' />
            </Button>
          </div>
        </div>
        <div className='flex w-[85%] overflow-hidden items-center h-fit gap-2 text-[hsl(222,8%,48%)] dark:text-gray-400'>
          <div className='flex items-center justify-start'>
            <span className='font-semibold text-4xl'>
              {weather ? getTemperature(weather, isFahrenheit) : "--"}
            </span>
            <span className='text-2xl font-regular'>
              °{isFahrenheit ? "F" : "C"}
            </span>
          </div>
          <div className='flex flex-col gap-1 justify-start'>
            <p title={weather?.name} className='text-base'>
              {weather?.name}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
