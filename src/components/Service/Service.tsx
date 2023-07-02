import { CheckIcon } from '@chakra-ui/icons'
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React from 'react'

export type Props = {
  value: string
  title: string
  Content?: React.FC
  tags?: string[]
}

export default function Service({
  title,
  Content = () => null,
  tags = [],
  value,
}: Props) {
  const t = useTranslations('Home')
  const handleClickBookingButton = () => {
    const option: any = document.querySelector(`option[value="${value}"]`)
    option.parentElement.value = value
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <AccordionItem>
      <h2>
        <AccordionButton
          py={4}
          bg="gray.100"
          _expanded={{ bg: 'gray.700', color: 'white' }}
        >
          <Box as="span" flex="1" textAlign="left">
            <Text fontSize={['lg', 'xl']}>{title}</Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Flex
          w="100%"
          flexDir={{ base: 'column', md: 'row' }}
          wrap="wrap"
          gap={12}
          py={4}
        >
          <Flex flexDir="column" w="100%" gap={5} alignItems="flex-start">
            <Content />
            <Flex w="100%" wrap={{ base: 'wrap', md: 'nowrap' }}>
              <Flex gap={2} wrap="wrap" w="100%" alignItems="center">
                {tags.map((tag) => (
                  <Tag
                    key={tag}
                    size={['md', 'lg']}
                    borderRadius="3xl"
                    maxH={35}
                    variant="solid"
                  >
                    <TagLeftIcon boxSize="12px" as={CheckIcon} />
                    <TagLabel>{tag}</TagLabel>
                  </Tag>
                ))}
              </Flex>
              <Button
                mt={2}
                w={['100%', 'fit-content']}
                onClick={handleClickBookingButton}
                colorScheme="red"
                justifySelf="flex-end"
                alignSelf="flex-end"
              >
                {t('order')}
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  )
}
