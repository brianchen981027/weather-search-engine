import React, { useEffect, useMemo } from 'react';

import { Col, Divider, Row } from 'antd';
import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '@/Hooks/useRedux';

import { getWeather } from '@/Slices/commonSlice';

const SearchResult = () => {
  const dispatch = useAppDispatch();
  const { weatherData } = useAppSelector((state) => state.common.value);
  const {
    main,
    name,
    sys,
    visibility,
    weather,
    wind,
  } = weatherData;
  const weatherIconUrl =
    weather[0].icon &&
    "https://openweathermap.org/img/wn/" + `${weather[0].icon}` + ".png";

  useEffect(() => {
    if (!name) {
      dispatch(
        getWeather({
          country: "TW",
          city: "Taipei",
        })
      );
    }
  }, [dispatch, name]);

  const horizontalContent = useMemo(
    () => (
      <div className="hidden md:inline">
        <Row className="result" justify="space-between">
          <Col span={4}>
            <h2>High / Low</h2>
          </Col>
          <Col span={4}>
            <h3>
              {Math.floor(main.temp_max - 273.15)} /{" "}
              {Math.floor(main.temp_min - 273.15)}
              {"  "}
              <sup>o</sup>C
            </h3>
          </Col>
          <Col span={4}>
            <h2>Wind</h2>
          </Col>
          <Col span={4}>
            <h3>{Math.floor((wind.speed * 18) / 5)} Km/hr</h3>
          </Col>
        </Row>
        <Row className="result" justify="space-between">
          <Col span={4}>
            <h2>Humidity</h2>
          </Col>
          <Col span={4}>
            <h3>{main.humidity} %</h3>
          </Col>
          <Col span={4}>
            <h2>Wind Direction</h2>
          </Col>
          <Col span={4}>
            <h3>
              {wind.deg} <sup>o</sup>deg
            </h3>
          </Col>
        </Row>
        <Row className="result" justify="space-between">
          <Col span={4}>
            <h2>Pressure</h2>
          </Col>
          <Col span={4}>
            <h3>{main.pressure} hpa</h3>
          </Col>
          <Col span={4}>
            <h2>Sunrise</h2>
          </Col>
          <Col span={4}>
            <h3>
              {new Date(sys.sunrise * 1000).toLocaleTimeString("en", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h3>
          </Col>
        </Row>
        <Row className="lastResult p-5" justify="space-between">
          <Col span={4}>
            <h2>Visibility</h2>
          </Col>
          <Col span={4}>
            <h3>{visibility / 1000} Km</h3>
          </Col>
          <Col span={4}>
            <h2>Sunset</h2>
          </Col>
          <Col span={4}>
            <h3>
              {new Date(sys.sunset * 1000).toLocaleTimeString("en", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h3>
          </Col>
        </Row>
      </div>
    ),
    [main, sys, visibility, wind]
  );

  const verticalContent = useMemo(
    () => (
      <div className="flex flex-col md:hidden">
        <Row className="result" justify="space-between">
          <Col span={6}>
            <h2>High / Low</h2>
          </Col>
          <Col span={6}>
            <h3>
              {Math.floor(main.temp_max - 273.15)} /{" "}
              {Math.floor(main.temp_min - 273.15)}
              {"  "}
              <sup>o</sup>C
            </h3>
          </Col>
        </Row>
        <Row className="result" justify="space-between">
          <Col span={6}>
            <h2>Wind</h2>
          </Col>
          <Col span={6}>
            <h3>{Math.floor((wind.speed * 18) / 5)} Km/hr</h3>
          </Col>
        </Row>
        <Row className="result" justify="space-between">
          <Col span={6}>
            <h2>Humidity</h2>
          </Col>
          <Col span={6}>
            <h3>{main.humidity} %</h3>
          </Col>
        </Row>
        <Row className="result" justify="space-between">
          <Col span={6}>
            <h2>Wind Direction</h2>
          </Col>
          <Col span={6}>
            <h3>
              {wind.deg} <sup>o</sup>deg
            </h3>
          </Col>
        </Row>
        <Row className="result" justify="space-between">
          <Col span={6}>
            <h2>Pressure</h2>
          </Col>
          <Col span={6}>
            <h3>{main.pressure} hpa</h3>
          </Col>
        </Row>
        <Row className="result" justify="space-between">
          <Col span={6}>
            <h2>Sunrise</h2>
          </Col>
          <Col span={6}>
            <h3>
              {new Date(sys.sunrise * 1000).toLocaleTimeString("en", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h3>
          </Col>
        </Row>
        <Row className="result" justify="space-between">
          <Col span={6}>
            <h2>Visibility</h2>
          </Col>
          <Col span={6}>
            <h3>{visibility / 1000} Km</h3>
          </Col>
        </Row>
        <Row className="lastResult p-3 xs:p-5" justify="space-between">
          <Col span={6}>
            <h2>Sunset</h2>
          </Col>
          <Col span={6}>
            <h3>
              {new Date(sys.sunset * 1000).toLocaleTimeString("en", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h3>
          </Col>
        </Row>
      </div>
    ),
    [main, sys, visibility, wind]
  );

  return (
    <div className="h-auto p-[5%] flex flex-col items-center justify-center">
      <div className="w-full rounded-xl p-[5%] bg-[#DCDCDC] opacity-80">
        <div className="w-full rounded-lg p-[2.5%] border-2 border-[#003153] flex flex-col">
          <h1 className="text-resultTitle text-[#003153] font-semibold">
            {name}, {sys.country}. Weather
          </h1>
          <span className="text-[#004D99] mt-2 ml-1">
            Current Time:{" "}
            {new Date().toLocaleString("zh-TW", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </span>
          <div className="flex items-center justify-center mt-4">
            <h1 className="text-temperature text-[#003153] font-semibold text-center">
              {Math.floor(main.temp - 273.15)}
              <sup>o</sup>C
            </h1>
            <div className="px-3 flex flex-col">
              <Image
                alt="Weather Icon"
                width={50}
                height={50}
                objectFit="contain"
                src={weatherIconUrl}
              />
              <span className="text-base text-[#082567] font-semibold mx-auto mt-2">
                {weather[0].main}
              </span>
            </div>
          </div>
          <span className="text-right text-sm text-[#082567] font-semibold mt-2">
            {weather[0].description}
          </span>
          <Divider className="border-[#082567] border-[1.5px]" dashed />
          {horizontalContent}
          {verticalContent}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
