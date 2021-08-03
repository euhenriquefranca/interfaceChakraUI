import { Flex, Heading, Text, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface SliderProps {
  continents: {
    id: string;
    name: string;
    call: string;
    callImage: string;
  }[];
}

export default function Slider({ continents }: SliderProps) {
  return (
    <Flex
      w="100%"
      h={['250px', '450px']}
      maxW="1240px"
      mx="auto"
      mb={['5', '10']}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={`url('${continent.callImage}')`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              color="#F5F8FA"
              bgSize="cover"
              textAlign="center"
            >
              <Link href={`/${continent.id}`} passHref>
                <ChakraLink
                  _hover={{ color: '#FFBA08' }}
                  justify="center"
                  align="center"
                >
                  <Heading
                     fontSize={["2xl", "3xl", "5xl"]}
                     lineHeight={["2.25rem", "3rem", "4.5rem"]}
                  >
                    {continent.name}
                  </Heading>
                  <Text
                    fontWeight="bold"
                    color="gray.300"
                    fontSize={['0.8rem', '1xl', '2xl']}
                    mt={['2', '4']}
                  >
                    {continent.call}
                  </Text>
                </ChakraLink>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
