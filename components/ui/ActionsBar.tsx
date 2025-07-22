import { Button, Card, Icon, useTheme } from '@rneui/themed';
import { ViewStyle } from 'react-native';

interface ActionsBarProps {
  onAddTransaction: () => void;
  onViewReports: () => void;
  style?: ViewStyle;
}

export function ActionsBar({ onAddTransaction, onViewReports, style }: ActionsBarProps) {
  const { theme } = useTheme();
  const actions = [
    {
      key: 'add',
      title: 'Adicionar Transação',
      color: theme.colors.primary,
      icon: { name: 'add-circle', type: 'material', color: theme.colors.white, size: 28 },
      onPress: onAddTransaction,
      description: 'Registre uma nova movimentação financeira.'
    },
    {
      key: 'reports',
      title: 'Ver Relatórios',
      color: theme.colors.success,
      icon: { name: 'bar-chart', type: 'feather', color: theme.colors.white, size: 28 },
      onPress: onViewReports,
      description: 'Visualize gráficos e relatórios detalhados.'
    },
  ];

  return (
    <Card containerStyle={{
      borderRadius: 18,
      padding: 18,
      backgroundColor: theme.colors.background,
      shadowColor: theme.colors.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 8,
      alignSelf: 'center',
      maxWidth: 370,
      width: '92%',
      minWidth: 220,
      ...style,
    }}>
      {actions.map(action => (
        <Button
          key={action.key}
          title={action.title}
          onPress={action.onPress}
          icon={<Icon {...action.icon} style={{ marginRight: 8 }} />}
          buttonStyle={{
            backgroundColor: action.color,
            borderRadius: 12,
            paddingVertical: 14,
            marginBottom: 14,
            width: '100%',
            elevation: 2,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 17, color: theme.colors.white }}
          accessibilityLabel={action.description}
        />
      ))}
    </Card>
  );
}

// Removido StyleSheet: estilos agora são inline e usam o tema do rneui
