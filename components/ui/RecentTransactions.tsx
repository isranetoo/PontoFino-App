import { Card, Icon, ListItem, Text } from '@rneui/themed';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View, ViewStyle } from 'react-native';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  date: string;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
  style?: ViewStyle;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    marginVertical: 12,
    maxWidth: 370,
    width: '100%',
    alignSelf: 'center',
    padding: 0,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 10,
    gap: 4,
  },
  title: {
    color: '#1976D2',
    fontWeight: 'bold',
    fontSize: 19,
    marginLeft: 8,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#E3EAF2',
    marginVertical: 6,
    borderRadius: 1,
  },
  emptyBox: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
  },
  empty: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 4,
    fontWeight: '500',
  },
  suggestion: {
    color: '#1976D2',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 2,
    fontWeight: '400',
  },
});

export function RecentTransactions({ transactions, style }: RecentTransactionsProps) {
  // Animação de entrada
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.card, style, { opacity: fadeAnim }]}>  
      <Card containerStyle={{ margin: 0, padding: 0, borderRadius: 18, elevation: 3, shadowColor: '#1976D2', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.10, shadowRadius: 4 }}>
        <View>
          <Animated.View style={styles.header}>
            <Icon name="history" type="material" size={22} color="#1976D2" />
            <Text style={styles.title}>Transações Recentes</Text>
          </Animated.View>
          <Animated.View style={styles.list}>
            {transactions.length === 0 ? (
              <Animated.View style={styles.emptyBox}>
                <Icon name="sentiment-dissatisfied" type="material" size={38} color="#888" containerStyle={{ marginBottom: 6 }} />
                <Text style={styles.empty}>Nenhuma transação encontrada.</Text>
                <Text style={styles.suggestion}>Adicione sua primeira transação para começar!</Text>
              </Animated.View>
            ) : (
              transactions.map((tx: Transaction, idx: number) => {
                return (
                  <React.Fragment key={tx.id}>
                    <ListItem containerStyle={{ paddingHorizontal: 0, paddingVertical: 0 }}>
                      <ListItem.Content>
                        <ListItem.Title style={{ fontWeight: 'bold', fontSize: 16 }}>{tx.title}</ListItem.Title>
                        <ListItem.Subtitle style={{ color: '#888', fontSize: 13 }}>{tx.date}</ListItem.Subtitle>
                      </ListItem.Content>
                      <Text style={{ color: tx.amount >= 0 ? '#1976D2' : '#D32F2F', fontWeight: 'bold', fontSize: 15 }}>
                        {tx.amount >= 0 ? `+R$ ${tx.amount.toFixed(2)}` : `-R$ ${Math.abs(tx.amount).toFixed(2)}`}
                      </Text>
                    </ListItem>
                    {idx < transactions.length - 1 ? (
                      <Animated.View style={styles.separator} key={`separator-${tx.id}`} />
                    ) : null}
                  </React.Fragment>
                );
              })
            )}
          </Animated.View>
        </View>
      </Card>
    </Animated.View>
  );
}
