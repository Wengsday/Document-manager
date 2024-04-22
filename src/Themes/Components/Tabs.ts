export const Tabs = {
  parts: ['tab', 'tablist'],
  variants: {
    custom: {
      tab: {
        borderTopRadius: 'md',
        color: 'gray.500',
        position: 'relative',
        borderBottom: '1px solid',
        borderColor: 'gray.300',
        py: '3',
        _selected: { color: 'primary.500', borderColor: 'primary.500' },
        _focus: {
          boxShadow: 'none',
          outline: 'none',
        },
      },
      tablist: {
        overflowX: 'scroll',
        bg: 'gray.100',
      },
    },
  },
  defaultProps: {
    variant: 'custom',
  },
};
