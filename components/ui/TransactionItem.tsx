import { Card, Icon, Text } from '@rneui/themed';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    elevation: 4,
    marginBottom: 14,
    paddingVertical: 18,
    paddingHorizontal: 16,
    shadowColor: '#1976D2',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.13,
    shadowRadius: 6,
    backgroundColor: '#F5F8FD',
  },
  cardPositive: {
    borderLeftWidth: 6,
    borderLeftColor: '#43A047',
  },
  cardNegative: {
    borderLeftWidth: 6,
    borderLeftColor: '#E53935',
  },
  title: {
    fontWeight: 'bold',
    color: '#1565C0',
    letterSpacing: 0.5,
    fontSize: 19,
    marginBottom: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'flex-start',
  },
  amount: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 2,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    overflow: 'hidden',
  },
  amountPositive: {
    backgroundColor: '#E8F5E9',
    color: '#43A047',
  },
  amountNegative: {
    backgroundColor: '#FFEBEE',
    color: '#E53935',
  },
  date: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
    alignSelf: 'flex-end',
    fontWeight: '500',
    letterSpacing: 0.2,
  },
});

interface TransactionItemProps {
  title: string;
  amount: number;
  date: string;
  style?: ViewStyle;
}

export function TransactionItem({ title, amount, date, style }: TransactionItemProps) {
  const isPositive = amount > 0;
  // Animação de entrada
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const iconAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(iconAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.timing(iconAnim, { toValue: 0, duration: 600, useNativeDriver: true })
      ])
    ).start();
  }, [fadeAnim, iconAnim]);

  const iconTranslate = iconAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, isPositive ? -6 : 6],
  });

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <Card containerStyle={[styles.card, style, isPositive ? styles.cardPositive : styles.cardNegative]}>
        <Card.Title>
          <Text h4 style={styles.title}>{title}</Text>
        </Card.Title>
        <Card.Divider />
        <Animated.View style={[styles.row]}>
          <Animated.View style={{ transform: [{ translateY: iconTranslate }] }}>
            <Icon
              name={isPositive ? 'arrow-upward' : 'arrow-downward'}
              type="material"
              color={isPositive ? '#43A047' : '#E53935'}
              size={28}
              style={{ marginRight: 10 }}
            />
          </Animated.View>
          <Text style={[styles.amount, isPositive ? styles.amountPositive : styles.amountNegative]}>
            {isPositive ? '+' : '-'}R$ {Math.abs(amount).toFixed(2)}
          </Text>
        </Animated.View>
        <Text style={styles.date}>{date}</Text>
      </Card>
    </Animated.View>
  );
}
