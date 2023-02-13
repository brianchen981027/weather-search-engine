import React, { useEffect, useState } from 'react';

import { Button, Select } from 'antd';

import { useAppDispatch, useAppSelector } from '@/Hooks/useRedux';

import { getAllCountry, getCity, getWeather } from '@/Slices/commonSlice';

import SearchResult from './SearchResult';

const Content = () => {
  const dispatch = useAppDispatch();
  const { country, city, isLoading } = useAppSelector(
    (state) => state.common.value
  );

  const [countryValue, setCountryValue] = useState();
  const [countryOptions, setCountryOptions] =
    useState<Array<{ value: string; label: string }>>();

  const [cityValue, setCityValue] = useState();
  const [cityOptions, setCityOptions] =
    useState<Array<{ value: string; label: string }>>();

  useEffect(() => {
    if (!country.length) {
      dispatch(getAllCountry());
    }
  }, [country, dispatch]);

  useEffect(() => {
    const countryValues: Array<{ value: string; label: string }> = [];
    if (country.length) {
      country.map((value) =>
        countryValues.push({
          value: value.iso2,
          label: `${value.name} (${value.iso2})`,
        })
      );
      setCountryOptions(countryValues);
    }
  }, [country]);

  useEffect(() => {
    const cityValues: Array<{ value: string; label: string }> = [];
    if (city.length) {
      city.map((value) =>
        cityValues.push({
          value: value.name,
          label: value.name,
        })
      );
      setCityOptions(cityValues);
    }
  }, [city]);

  return (
    <>
      <div className="h-auto px-[5%] py-[10%] flex flex-col items-center justify-center">
        <h1 className="text-[28px] text-[#003153] text-center font-bold sm:text-[32px] md:text-[48px]">
          Weather Search Engine
        </h1>
        <div className="search flex flex-col w-full mx-auto mt-[5%] items-center justify-evenly md:flex-row">
          <div className="flex w-full md:w-fit">
            <h1 className="text-footerText text-[#082567] font-semibold">
              Country：
            </h1>
            <Select
              className="w-full md:w-[25vw]"
              placeholder="Select the Country"
              loading={isLoading}
              optionFilterProp="children"
              onChange={(value) => {
                console.log("value: ", value);
                setCountryValue(value);
                dispatch(getCity({ countryCode: value }));
              }}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={countryOptions}
              virtual={false}
            />
          </div>
          <div className="flex w-full mt-5 md:w-fit md:mt-0">
            <h1 className="text-footerText text-[#082567] font-semibold">
              City：
            </h1>
            <Select
              className="w-full md:w-[25vw]"
              placeholder="Select the City"
              optionFilterProp="children"
              loading={isLoading}
              onChange={(value) => setCityValue(value)}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={cityOptions}
              virtual={false}
            />
          </div>
          <Button
            className="w-full mt-5 md:w-[10vw] md:mt-0"
            size="large"
            type="primary"
            onClick={() => {
              if (countryValue && cityValue) {
                dispatch(
                  getWeather({ country: countryValue, city: cityValue })
                );
              }
            }}
          >
            Search
          </Button>
        </div>
      </div>
      <SearchResult />
    </>
  );
};

export default Content;
