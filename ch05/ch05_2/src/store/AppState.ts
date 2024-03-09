import * as Clock from './clock'
import * as Counter from './counter'
import * as RemoteUser from './remoteUser'
import * as Cards from './cards'

export type AppState = {
  clock: Clock.State
  counter: Counter.State
  remoteUser: RemoteUser.State
  cards: Cards.State
}
