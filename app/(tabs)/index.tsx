import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ActionsBar } from '@/components/ui/ActionsBar';
import { FinanceCard } from '@/components/ui/FinanceCard';
import { RecentTransactions } from '@/components/ui/RecentTransactions';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

// Mock data for demonstration
const transactions = [
  { id: 1, title: 'Supermercado', amount: -120.5, date: '20/07/2025' },
  { id: 2, title: 'Salário', amount: 3500, date: '15/07/2025' },
  { id: 3, title: 'Transporte', amount: -60, date: '14/07/2025' },
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E3F2FD', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/icon_pontofino.png')}
          style={styles.logo}
        />
      }
    >
      <ThemedView style={styles.pageContent}>
        <ThemedView style={styles.headerContainer}>
          <ThemedText type="title">PontoFino Finanças</ThemedText>
          <ThemedText type="subtitle" style={{ marginTop: 4 }}>
            Seu gerenciador de finanças pessoais
          </ThemedText>
        </ThemedView>

        {/* Cards de resumo financeiro */}
        <FinanceCard title="Saldo Atual" value="R$ 2.350,00" color="#1976D2" subtitle="Disponível" />
        <FinanceCard title="Receitas" value="R$ 3.500,00" color="#43A047" subtitle="Este mês" />
        <FinanceCard title="Despesas" value="R$ 1.150,00" color="#E53935" subtitle="Este mês" />

        <ActionsBar
          onAddTransaction={() => {}}
          onViewReports={() => {}}
          style={styles.actionsContainer}
        />

        <RecentTransactions transactions={transactions} style={{ marginTop: 8 }} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  pageContent: {
    marginTop: 24,
    marginBottom: 24,
  },
  logo: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 12,
    gap: 4,
  },
  balanceContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginVertical: 10,
    elevation: 2,
    shadowColor: '#1976D2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    maxWidth: 350,
    width: '100%',
    alignSelf: 'center',
    gap: 8,
  },
  incomeExpenseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginVertical: 8,
  },
  transactionsList: {
    gap: 10,
    marginTop: 8,
    flexGrow: 1,
  },
  transactionItem: {
    backgroundColor: '#E3F2FD',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  transactionDate: {
    fontSize: 12,
    color: '#888',
    marginLeft: 8,
  },
});


