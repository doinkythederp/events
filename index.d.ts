import type NodeEventEmitter = require('events');

type EventMap = Record<string, any>;
type DefaultEvent = (...args: any[]) => void;

/**
 * Provides typings for the `on`, `once`, `off`, and `emit` methods.
 *
 * ```ts
 * import EventEmitter = require('@doinkythederp/events');
 *
 * interface MyEvents {
 *   // Provide an interface with the event name
 *   // mapped to the event handler
 *   myEventName: (arg0: string, arg1: number) => void
 * }
 * new EventEmitter<MyEvents>();
 * ```
 */
declare class EventEmitter<Events extends EventMap = {}> extends NodeEventEmitter {
  override on<Event extends keyof Events>(eventName: Event, listener: Events[Event]): this;
  override on<Event extends string>(eventName: Event, listener: DefaultEvent): this;

  override once<Event extends keyof Events>(eventName: Event, listener: Events[Event]): this;
  override once<Event extends string>(eventName: Event, listener: DefaultEvent): this;

  override off<Event extends keyof Events>(eventName: Event, listener: Events[Event]): this;
  override off<Event extends string>(eventName: Event, listener: DefaultEvent): this;

  override emit<Event extends keyof Events>(eventName: Event, ...args: Parameters<Events[Event]>): boolean;
  override emit<Event extends string>(eventName: Event, ...args: Parameters<DefaultEvent>): boolean;
}

export = EventEmitter;
