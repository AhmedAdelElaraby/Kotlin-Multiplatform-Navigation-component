(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    globalThis['kotlinx-coroutines-core'] = factory(typeof globalThis['kotlinx-coroutines-core'] === 'undefined' ? {} : globalThis['kotlinx-coroutines-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var protoOf = kotlin_kotlin.$_$.kb;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var Continuation = kotlin_kotlin.$_$.f9;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var VOID = kotlin_kotlin.$_$.e;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.k3;
  var Key_instance = kotlin_kotlin.$_$.j3;
  var equals = kotlin_kotlin.$_$.ba;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.x8;
  var toString = kotlin_kotlin.$_$.ob;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var intercepted = kotlin_kotlin.$_$.y8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var initMetadataForInterface = kotlin_kotlin.$_$.na;
  var isInterface = kotlin_kotlin.$_$.za;
  var toString_0 = kotlin_kotlin.$_$.ig;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
  var hashCode = kotlin_kotlin.$_$.ja;
  var CoroutineImpl = kotlin_kotlin.$_$.l9;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ma;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.z;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.r2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.t2;
  var Companion_instance = kotlin_kotlin.$_$.y3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.q2;
  var createFailure = kotlin_kotlin.$_$.of;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.b9;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.a9;
  var get = kotlin_kotlin.$_$.c9;
  var minusKey = kotlin_kotlin.$_$.d9;
  var ContinuationInterceptor = kotlin_kotlin.$_$.e9;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var addSuppressed = kotlin_kotlin.$_$.lf;
  var Enum = kotlin_kotlin.$_$.pe;
  var startCoroutine = kotlin_kotlin.$_$.n9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.xf;
  var Long = kotlin_kotlin.$_$.ue;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.l;
  var RuntimeException = kotlin_kotlin.$_$.ye;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.g2;
  var captureStack = kotlin_kotlin.$_$.u9;
  var Error_0 = kotlin_kotlin.$_$.qe;
  var Error_init_$Init$ = kotlin_kotlin.$_$.k1;
  var Element = kotlin_kotlin.$_$.j9;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.eg;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var CancellationException = kotlin_kotlin.$_$.v8;
  var ArrayList = kotlin_kotlin.$_$.m4;
  var SequenceScope = kotlin_kotlin.$_$.lc;
  var initMetadataForLambda = kotlin_kotlin.$_$.oa;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.x1;
  var sequence = kotlin_kotlin.$_$.vc;
  var plus = kotlin_kotlin.$_$.k9;
  var get_0 = kotlin_kotlin.$_$.h9;
  var fold = kotlin_kotlin.$_$.g9;
  var minusKey_0 = kotlin_kotlin.$_$.i9;
  var anyToString = kotlin_kotlin.$_$.q9;
  var UnsupportedOperationException = kotlin_kotlin.$_$.kf;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.y;
  var Companion_getInstance = kotlin_kotlin.$_$.v3;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.g;
  var toDuration = kotlin_kotlin.$_$.je;
  var returnIfSuspended = kotlin_kotlin.$_$.j;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.j2;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.pf;
  var toLong = kotlin_kotlin.$_$.mb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var listOf = kotlin_kotlin.$_$.b7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var compareTo = kotlin_kotlin.$_$.z9;
  var last = kotlin_kotlin.$_$.od;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.la;
  var IllegalStateException = kotlin_kotlin.$_$.te;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.u1;
  var NoSuchElementException = kotlin_kotlin.$_$.ve;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.a2;
  var getKClass = kotlin_kotlin.$_$.c;
  var Unit = kotlin_kotlin.$_$.jf;
  var fillArrayVal = kotlin_kotlin.$_$.ca;
  var copyOf = kotlin_kotlin.$_$.o5;
  var joinToString = kotlin_kotlin.$_$.o6;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.dg;
  var Exception = kotlin_kotlin.$_$.re;
  var toLongOrNull = kotlin_kotlin.$_$.be;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.z8;
  var plus_0 = kotlin_kotlin.$_$.n7;
  var KtList = kotlin_kotlin.$_$.o4;
  var listOf_0 = kotlin_kotlin.$_$.a7;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.a1;
  var getStringHashCode = kotlin_kotlin.$_$.ia;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.s;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.e2;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var removeFirstOrNull = kotlin_kotlin.$_$.p7;
  var KtMutableList = kotlin_kotlin.$_$.s4;
  var coerceIn = kotlin_kotlin.$_$.ec;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.i2;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.bx(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.bx.call(this, cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.ww(onCancelling, invokeImmediately, handler) : $super.ww.call(this, onCancelling, invokeImmediately, handler);
  }
  initMetadataForInterface(Job, 'Job', VOID, VOID, [Element], [0]);
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Job, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], [0]);
  initMetadataForClass(StandaloneCoroutine, 'StandaloneCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', VOID, StandaloneCoroutine, VOID, [0]);
  initMetadataForClass(ScopeCoroutine, 'ScopeCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(DispatchedCoroutine, 'DispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.jy(cause) : $super.jy.call(this, cause);
  }
  initMetadataForInterface(CancellableContinuation, 'CancellableContinuation', VOID, VOID, [Continuation]);
  initMetadataForClass(CancelHandlerBase, 'CancelHandlerBase');
  initMetadataForInterface(NotCompleted, 'NotCompleted');
  initMetadataForClass(CancelHandler, 'CancelHandler', VOID, CancelHandlerBase, [CancelHandlerBase, NotCompleted]);
  initMetadataForClass(DisposeOnCancel, 'DisposeOnCancel', VOID, CancelHandler);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForInterface(Waiter, 'Waiter');
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [DispatchedTask, CancellableContinuation, Waiter]);
  initMetadataForObject(Active, 'Active', VOID, VOID, [NotCompleted]);
  initMetadataForClass(CompletedContinuation, 'CompletedContinuation');
  initMetadataForClass(InvokeOnCancel, 'InvokeOnCancel', VOID, CancelHandler);
  initMetadataForCoroutine($awaitCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(CompletableDeferredImpl, 'CompletableDeferredImpl', VOID, JobSupport, [JobSupport, Job], [0]);
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForClass(CancelledContinuation, 'CancelledContinuation', VOID, CompletedExceptionally);
  initMetadataForClass(CompletedWithCancellation, 'CompletedWithCancellation');
  initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  initMetadataForObject(Key_0, 'Key');
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().r11(timeMillis, block, context);
  }
  initMetadataForInterface(Delay, 'Delay', VOID, VOID, VOID, [1]);
  initMetadataForInterface(DelayWithTimeoutDiagnostics, 'DelayWithTimeoutDiagnostics', VOID, VOID, [Delay], [1]);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForObject(Key_1, 'Key');
  initMetadataForInterface(ChildHandle, 'ChildHandle');
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [ChildHandle]);
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(LinkedListNode, 'LinkedListNode', LinkedListNode);
  initMetadataForClass(LinkedListHead, 'LinkedListHead', LinkedListHead, LinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LinkedListHead, [LinkedListHead, Incomplete]);
  initMetadataForClass(CompletionHandlerBase, 'CompletionHandlerBase', VOID, LinkedListNode);
  initMetadataForClass(JobNode, 'JobNode', VOID, CompletionHandlerBase, [CompletionHandlerBase, Incomplete]);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [SynchronizedObject, Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForClass(AwaitContinuation, 'AwaitContinuation', VOID, CancellableContinuationImpl);
  initMetadataForLambda(JobSupport$_get_children_$slambda_k839f8, CoroutineImpl, VOID, [1]);
  initMetadataForClass(JobCancellingNode, 'JobCancellingNode', VOID, JobNode);
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobCancellingNode);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(ResumeOnCompletion, 'ResumeOnCompletion', VOID, JobNode);
  initMetadataForClass(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', VOID, JobNode);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(ChildContinuation, 'ChildContinuation', VOID, JobCancellingNode);
  initMetadataForClass(JobImpl, 'JobImpl', VOID, JobSupport, [JobSupport, Job], [0]);
  initMetadataForClass(DisposeOnCompletion, 'DisposeOnCompletion', VOID, JobNode);
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(SupervisorJobImpl, 'SupervisorJobImpl', VOID, JobImpl, VOID, [0]);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException);
  initMetadataForClass(TimeoutCoroutine, 'TimeoutCoroutine', VOID, ScopeCoroutine, [ScopeCoroutine, Runnable], [0]);
  initMetadataForCoroutine($withTimeoutOrNullCOROUTINE$3, CoroutineImpl);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForObject(Key_2, 'Key');
  initMetadataForClass(YieldContext, 'YieldContext', YieldContext, AbstractCoroutineContextElement);
  initMetadataForClass(BufferOverflow, 'BufferOverflow', VOID, Enum);
  initMetadataForClass(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode');
  initMetadataForClass(Segment, 'Segment', VOID, ConcurrentLinkedListNode, [ConcurrentLinkedListNode, NotCompleted]);
  initMetadataForClass(ChannelSegment, 'ChannelSegment', VOID, Segment);
  initMetadataForCoroutine($hasNextCOROUTINE$7, CoroutineImpl);
  initMetadataForClass(SendBroadcast, 'SendBroadcast', VOID, VOID, [Waiter]);
  initMetadataForClass(BufferedChannelIterator, 'BufferedChannelIterator', VOID, VOID, [Waiter], [0, 3]);
  initMetadataForCoroutine($sendCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($receiveCOROUTINE$5, CoroutineImpl);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.n1e(cause) : $super.n1e.call(this, cause);
  }
  initMetadataForInterface(SendChannel, 'SendChannel', VOID, VOID, VOID, [1]);
  function cancel$default_1(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.bx(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.bx.call(this, cause);
    }
    return tmp;
  }
  initMetadataForInterface(ReceiveChannel, 'ReceiveChannel', VOID, VOID, VOID, [0]);
  initMetadataForClass(BufferedChannel, 'BufferedChannel', VOID, VOID, [SendChannel, ReceiveChannel], [1, 4, 0, 3]);
  initMetadataForClass(WaiterEB, 'WaiterEB');
  initMetadataForClass(ReceiveCatching, 'ReceiveCatching', VOID, VOID, [Waiter]);
  initMetadataForObject(Factory, 'Factory');
  initMetadataForClass(Failed, 'Failed', Failed);
  initMetadataForClass(Closed, 'Closed', VOID, Failed);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ChannelResult, 'ChannelResult');
  initMetadataForClass(ClosedSendChannelException, 'ClosedSendChannelException', VOID, IllegalStateException);
  initMetadataForClass(ClosedReceiveChannelException, 'ClosedReceiveChannelException', VOID, NoSuchElementException);
  initMetadataForClass(ChannelCoroutine, 'ChannelCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, SendChannel, ReceiveChannel], [0, 1]);
  initMetadataForClass(ConflatedBufferedChannel, 'ConflatedBufferedChannel', VOID, BufferedChannel, VOID, [1, 0]);
  initMetadataForInterface(ProducerScope, 'ProducerScope', VOID, VOID, [CoroutineScope, SendChannel], [1]);
  initMetadataForClass(ProducerCoroutine, 'ProducerCoroutine', VOID, ChannelCoroutine, [ChannelCoroutine, ProducerScope], [0, 1]);
  initMetadataForClass(AbstractFlow, 'AbstractFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(SafeFlow, 'SafeFlow', VOID, AbstractFlow, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$12, CoroutineImpl);
  initMetadataForClass(ChannelFlow, 'ChannelFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(ChannelAsFlow, 'ChannelAsFlow', VOID, ChannelFlow, VOID, [1]);
  initMetadataForCoroutine($emitAllImplCOROUTINE$11, CoroutineImpl);
  initMetadataForCoroutine($collectCOROUTINE$13, CoroutineImpl);
  initMetadataForInterface(FlowCollector, 'FlowCollector', VOID, VOID, VOID, [1]);
  initMetadataForClass(Emitter, 'Emitter');
  initMetadataForCoroutine($collectCOROUTINE$14, CoroutineImpl);
  initMetadataForClass(AbstractSharedFlow, 'AbstractSharedFlow', VOID, SynchronizedObject);
  initMetadataForClass(SharedFlowImpl, 'SharedFlowImpl', VOID, AbstractSharedFlow, [AbstractSharedFlow, FlowCollector], [1]);
  initMetadataForClass(AbstractSharedFlowSlot, 'AbstractSharedFlowSlot');
  initMetadataForClass(SharedFlowSlot, 'SharedFlowSlot', SharedFlowSlot, AbstractSharedFlowSlot);
  initMetadataForCoroutine($collectCOROUTINE$15, CoroutineImpl);
  initMetadataForClass(StateFlowImpl, 'StateFlowImpl', VOID, AbstractSharedFlow, [AbstractSharedFlow, FlowCollector], [1]);
  initMetadataForClass(StateFlowSlot, 'StateFlowSlot', StateFlowSlot, AbstractSharedFlowSlot, VOID, [0]);
  initMetadataForLambda(ChannelFlow$_get_collectToFun_$slambda_j53z2e, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelFlow$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SendingCollector, 'SendingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(ThrowingCollector, 'ThrowingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForCoroutine($onSubscriptionCOROUTINE$21, CoroutineImpl);
  initMetadataForClass(SubscribedFlowCollector, 'SubscribedFlowCollector', VOID, VOID, [FlowCollector], [1, 0]);
  initMetadataForCoroutine($collectCOROUTINE$22, CoroutineImpl);
  initMetadataForClass(ReadonlyStateFlow, 'ReadonlyStateFlow', VOID, VOID, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$23, CoroutineImpl);
  initMetadataForClass(ReadonlySharedFlow, 'ReadonlySharedFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(OpDescriptor, 'OpDescriptor');
  initMetadataForClass(SegmentOrClosed, 'SegmentOrClosed');
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [DispatchedTask, Continuation]);
  initMetadataForClass(UndeliveredElementException, 'UndeliveredElementException', VOID, RuntimeException);
  initMetadataForClass(ContextScope, 'ContextScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForInterface(SelectInstance, 'SelectInstance');
  initMetadataForClass(ClauseData, 'ClauseData', VOID, VOID, VOID, [1]);
  initMetadataForClass(SelectImplementation, 'SelectImplementation', VOID, CancelHandler, [CancelHandler, SelectInstance, Waiter], [0, 2]);
  initMetadataForClass(TrySelectDetailedResult, 'TrySelectDetailedResult', VOID, Enum);
  function lock$default(owner, $completion, $super) {
    owner = owner === VOID ? null : owner;
    return $super === VOID ? this.m1o(owner, $completion) : $super.m1o.call(this, owner, $completion);
  }
  function unlock$default(owner, $super) {
    owner = owner === VOID ? null : owner;
    var tmp;
    if ($super === VOID) {
      this.o1o(owner);
      tmp = Unit_instance;
    } else {
      tmp = $super.o1o.call(this, owner);
    }
    return tmp;
  }
  initMetadataForInterface(Mutex, 'Mutex', VOID, VOID, VOID, [1]);
  initMetadataForClass(CancellableContinuationWithOwner, 'CancellableContinuationWithOwner', VOID, VOID, [CancellableContinuation, Waiter]);
  initMetadataForClass(SemaphoreImpl, 'SemaphoreImpl', VOID, VOID, VOID, [0]);
  initMetadataForClass(MutexImpl, 'MutexImpl', VOID, SemaphoreImpl, [SemaphoreImpl, Mutex], [1, 0]);
  initMetadataForClass(SemaphoreSegment, 'SemaphoreSegment', VOID, Segment);
  initMetadataForClass(UndispatchedCoroutine, 'UndispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [KtMutableList]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForObject(TaskContext, 'TaskContext');
  initMetadataForClass(SafeCollector, 'SafeCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(ClearTimeout, 'ClearTimeout', VOID, CancelHandler);
  initMetadataForClass(WindowClearTimeout, 'WindowClearTimeout', VOID, ClearTimeout);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.ov(parentContext.u9(Key_instance_2));
    }
    this.rv_1 = parentContext.rh(this);
  }
  protoOf(AbstractCoroutine).n9 = function () {
    return this.rv_1;
  };
  protoOf(AbstractCoroutine).sv = function () {
    return this.rv_1;
  };
  protoOf(AbstractCoroutine).tv = function () {
    return protoOf(JobSupport).tv.call(this);
  };
  protoOf(AbstractCoroutine).uv = function (value) {
  };
  protoOf(AbstractCoroutine).vv = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).wv = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).xv = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.vv(state.yv_1, state.aw());
    } else {
      this.uv((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).s9 = function (result) {
    var state = this.bw(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.cw(state);
  };
  protoOf(AbstractCoroutine).cw = function (state) {
    return this.dw(state);
  };
  protoOf(AbstractCoroutine).ew = function (exception) {
    handleCoroutineException(this.rv_1, exception);
  };
  protoOf(AbstractCoroutine).fw = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.rv_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).fw.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).fw.call(this);
  };
  protoOf(AbstractCoroutine).gw = function (start, receiver, block) {
    start.jw(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.px() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.gw(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var oldContext = $completion.n9();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.u9(Key_instance), oldContext.u9(Key_instance))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        coroutine_0.rv_1;
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.vx();
    }
    return tmp$ret$0;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).nx = function (exception) {
    handleCoroutineException(this.rv_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.cy_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).rw = function () {
    startCoroutineCancellable_0(this.cy_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.ux_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.ux_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.ux_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.ux_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.ux_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).dw = function (state) {
    this.cw(state);
  };
  protoOf(DispatchedCoroutine).cw = function (state) {
    if (tryResume(this))
      return Unit_instance;
    resumeCancellableWith(intercepted(this.gy_1), recoverResult(state, this.gy_1));
  };
  protoOf(DispatchedCoroutine).vx = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.nw());
    if (state instanceof CompletedExceptionally)
      throw state.yv_1;
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  function CancellableContinuation() {
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new DisposeOnCancel(handle);
    return _this__u8e3s4.ly(tmp$ret$1);
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.oy_1 = handle;
  }
  protoOf(DisposeOnCancel).py = function (cause) {
    return this.oy_1.qy();
  };
  protoOf(DisposeOnCancel).invoke = function (cause) {
    return this.py(cause);
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + toString(this.oy_1) + ']';
  };
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, 1);
    }
    var tmp0_safe_receiver = delegate.xy();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      if (tmp0_safe_receiver.ez()) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, 2);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_parentHandle__f8dcex($this) {
    return $this.dz_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.nw();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.gz_1)) {
      var tmp_0 = $this.zy_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).fz();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.zy_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.hz(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.bz_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    if (!!(index === 536870911)) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      segment.mz(index, cause, $this.n9());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.n9(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.bz_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (1 << 29) + (cur & 536870911) | 0;
          if ($this.bz_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.bz_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (2 << 29) + (cur & 536870911) | 0;
          if ($this.bz_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.n9().u9(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ChildContinuation($this);
    var handle = parent.xw(true, VOID, tmp$ret$1);
    $this.dz_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.cz_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellationImpl.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.cz_1.atomicfu$compareAndSet(state, handler))
          return Unit_instance;
      } else {
        var tmp;
        if (state instanceof CancelHandler) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.vz()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.yv_1;
              if (handler instanceof CancelHandler) {
                $this.sz(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.oz_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!(handler instanceof CancelHandler))
                THROW_CCE();
              if (state.tz()) {
                $this.sz(handler, state.rz_1);
                return Unit_instance;
              }
              var update = state.uz(VOID, handler);
              if ($this.cz_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!(handler instanceof CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.cz_1.atomicfu$compareAndSet(state, update_0))
                return Unit_instance;
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) && idempotent == null) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = state instanceof CancelHandler;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, state instanceof CancelHandler ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.cz_1;
    while (true) {
      var tmp1 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        if (!(tmp1 == null) ? isInterface(tmp1, NotCompleted) : false) {
          var update = resumedState($this, tmp1, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.cz_1.atomicfu$compareAndSet(tmp1, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_instance;
        } else {
          if (tmp1 instanceof CancelledContinuation) {
            if (tmp1.a10()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>.<anonymous>' call
                $this.wz(onCancellation, tmp1.yv_1);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.cz_1;
    while (true) {
      var tmp1 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        if (!(tmp1 == null) ? isInterface(tmp1, NotCompleted) : false) {
          var update = resumedState($this, tmp1, proposedUpdate, $this.gz_1, onCancellation, idempotent);
          if (!$this.cz_1.atomicfu$compareAndSet(tmp1, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp1 instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) && tmp1.qz_1 === idempotent) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.b10();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.zy_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.az_1 = this.zy_1.n9();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$0 = (0 << 29) + 536870911 | 0;
    tmp.bz_1 = atomic$int$1(tmp$ret$0);
    this.cz_1 = atomic$ref$1(Active_instance);
    this.dz_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).c10 = function () {
    return this.zy_1;
  };
  protoOf(CancellableContinuationImpl).n9 = function () {
    return this.az_1;
  };
  protoOf(CancellableContinuationImpl).nw = function () {
    return this.cz_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).ow = function () {
    var tmp = this.nw();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).d10 = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.ow()) {
      handle.qy();
      this.dz_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).ez = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.cz_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.qz_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.b10();
      return false;
    }
    var tmp_0 = this.bz_1;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    tmp_0.kotlinx$atomicfu$value = (0 << 29) + 536870911 | 0;
    this.cz_1.kotlinx$atomicfu$value = Active_instance;
    return true;
  };
  protoOf(CancellableContinuationImpl).e10 = function () {
    return this.nw();
  };
  protoOf(CancellableContinuationImpl).f10 = function (takenState, cause) {
    var this_0 = this.cz_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            if (!!state.tz()) {
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.uz(VOID, VOID, VOID, VOID, cause);
            if (this.cz_1.atomicfu$compareAndSet(state, update)) {
              state.g10(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.cz_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).jy = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.cz_1;
    while (true) {
      var tmp1 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        if (!(!(tmp1 == null) ? isInterface(tmp1, NotCompleted) : false))
          return false;
        var tmp;
        if (tmp1 instanceof CancelHandler) {
          tmp = true;
        } else {
          tmp = tmp1 instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.cz_1.atomicfu$compareAndSet(tmp1, update)) {
          break $l$block;
        }
        if (tmp1 instanceof CancelHandler) {
          this.sz(tmp1, cause);
        } else {
          if (tmp1 instanceof Segment) {
            callSegmentOnCancellation(this, tmp1, cause);
          }
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.gz_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).h10 = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.jy(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).sz = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.n9(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
        tmp_0 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).wz = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.n9(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).i10 = function (parent) {
    return parent.sw();
  };
  protoOf(CancellableContinuationImpl).vx = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.j10();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.j10();
    }
    var state = this.nw();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.yv_1, this);
    if (get_isCancellableMode(this.gz_1)) {
      var job = this.n9().u9(Key_instance_2);
      if (!(job == null) && !job.tv()) {
        var cause = job.sw();
        this.f10(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.k10(state);
  };
  protoOf(CancellableContinuationImpl).j10 = function () {
    var tmp = this.zy_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l10(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.b10();
    this.jy(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).s9 = function (result) {
    return resumeImpl$default(this, toState(result, this), this.gz_1);
  };
  protoOf(CancellableContinuationImpl).ny = function (value, onCancellation) {
    return resumeImpl(this, value, this.gz_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).m10 = function (segment, index) {
    var tmp0 = this.bz_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
        // Inline function 'kotlinx.coroutines.index' call
        // Inline function 'kotlin.check' call
        if (!((cur & 536870911) === 536870911)) {
          // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>.<anonymous>' call
          var message = 'invokeOnCancellation should be called at most once';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlinx.coroutines.decision' call
        // Inline function 'kotlinx.coroutines.decisionAndIndex' call
        var upd = (cur >> 29 << 29) + index | 0;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    invokeOnCancellationImpl(this, segment);
  };
  protoOf(CancellableContinuationImpl).ly = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    invokeOnCancellationImpl(this, cancelHandler);
  };
  protoOf(CancellableContinuationImpl).b10 = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.qy();
    this.dz_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).hy = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).iy = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.gz_1);
  };
  protoOf(CancellableContinuationImpl).my = function (_this__u8e3s4, value) {
    var tmp = this.zy_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.sy_1) === _this__u8e3s4) {
      tmp_0 = 4;
    } else {
      tmp_0 = this.gz_1;
    }
    resumeImpl$default(this, value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).k10 = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.nz_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).n10 = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).n10.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.zy_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.o10() + '(' + toDebugString(this.zy_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).o10 = function () {
    return 'CancellableContinuation';
  };
  function NotCompleted() {
  }
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.nz_1 = result;
    this.oz_1 = cancelHandler;
    this.pz_1 = onCancellation;
    this.qz_1 = idempotentResume;
    this.rz_1 = cancelCause;
  }
  protoOf(CompletedContinuation).tz = function () {
    return !(this.rz_1 == null);
  };
  protoOf(CompletedContinuation).g10 = function (cont, cause) {
    var tmp0_safe_receiver = this.oz_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.CompletedContinuation.invokeHandlers.<anonymous>' call
      cont.sz(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.pz_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.CompletedContinuation.invokeHandlers.<anonymous>' call
      cont.wz(tmp1_safe_receiver, cause);
    }
  };
  protoOf(CompletedContinuation).r10 = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).uz = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.nz_1 : result;
    cancelHandler = cancelHandler === VOID ? this.oz_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.pz_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.qz_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.rz_1 : cancelCause;
    return $super === VOID ? this.r10(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.r10.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.nz_1) + ', cancelHandler=' + toString_0(this.oz_1) + ', onCancellation=' + toString_0(this.pz_1) + ', idempotentResume=' + toString_0(this.qz_1) + ', cancelCause=' + toString_0(this.rz_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.nz_1 == null ? 0 : hashCode(this.nz_1);
    result = imul(result, 31) + (this.oz_1 == null ? 0 : hashCode(this.oz_1)) | 0;
    result = imul(result, 31) + (this.pz_1 == null ? 0 : hashCode(this.pz_1)) | 0;
    result = imul(result, 31) + (this.qz_1 == null ? 0 : hashCode(this.qz_1)) | 0;
    result = imul(result, 31) + (this.rz_1 == null ? 0 : hashCode(this.rz_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.nz_1, tmp0_other_with_cast.nz_1))
      return false;
    if (!equals(this.oz_1, tmp0_other_with_cast.oz_1))
      return false;
    if (!equals(this.pz_1, tmp0_other_with_cast.pz_1))
      return false;
    if (!equals(this.qz_1, tmp0_other_with_cast.qz_1))
      return false;
    if (!equals(this.rz_1, tmp0_other_with_cast.rz_1))
      return false;
    return true;
  };
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.s10_1 = handler;
  }
  protoOf(InvokeOnCancel).py = function (cause) {
    this.s10_1(cause);
  };
  protoOf(InvokeOnCancel).invoke = function (cause) {
    return this.py(cause);
  };
  protoOf(InvokeOnCancel).toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.s10_1) + '@' + get_hexAddress(this) + ']';
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b11_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$2).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.b11_1.c11(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : !(suspendResult == null)) ? suspendResult : THROW_CCE();
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.ov(parent);
  }
  protoOf(CompletableDeferredImpl).ax = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).f11 = function ($completion) {
    var tmp = new $awaitCOROUTINE$2(this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(CompletableDeferredImpl).g11 = function (value) {
    return this.h11(value);
  };
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.yv_1 = cause;
    this.zv_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).aw = function () {
    return this.zv_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).vz = function () {
    return this.zv_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.yv_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.zz_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).a10 = function () {
    return this.zz_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.fold' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    // Inline function 'kotlin.fold' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      tmp = !(onCancellation == null) ? new CompletedWithCancellation(it, onCancellation) : it;
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.i11_1 = result;
    this.j11_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString_0(this.i11_1) + ', onCancellation=' + toString(this.j11_1) + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.i11_1 == null ? 0 : hashCode(this.i11_1);
    result = imul(result, 31) + hashCode(this.j11_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.i11_1, tmp0_other_with_cast.i11_1))
      return false;
    if (!equals(this.j11_1, tmp0_other_with_cast.j11_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.yv_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = (state == null ? true : !(state == null)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(value);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).l11 = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).n11 = function (context, block) {
    return this.m11(context, block);
  };
  protoOf(CoroutineDispatcher).v9 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).w9 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.o11();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.u9(Key_instance_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        tmp0_safe_receiver.p11(context, exception);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(exception, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, exception);
  }
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    addSuppressed(this_0, originalException);
    return this_0;
  }
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.u9(Key_instance_2) == null) ? context : context.rh(Job_0()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var coroutine = new ScopeCoroutine($completion.n9(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.sv().u9(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Scope cannot be cancelled because it does not have a job: ' + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.bx(cause);
  }
  function get_isActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.sv().u9(Key_instance_2);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tv();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).jw = function (block, receiver, completion) {
    var tmp;
    switch (this.s2_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).px = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.u9(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delay(timeMillis, $completion) {
    if (timeMillis.a1(new Long(0, 0)) <= 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.d10();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    if (timeMillis.a1(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.n9()).q11(timeMillis, cancellable);
    }
    return cancellable.vx();
  }
  function DelayWithTimeoutDiagnostics() {
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.u11_1 = new Long(0, 0);
    this.v11_1 = false;
    this.w11_1 = null;
  }
  protoOf(EventLoop).x11 = function () {
    var tmp0_elvis_lhs = this.w11_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.bf();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.p10();
    return true;
  };
  protoOf(EventLoop).y11 = function (task) {
    var tmp0_elvis_lhs = this.w11_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.w11_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.ze(task);
  };
  protoOf(EventLoop).z11 = function () {
    return this.u11_1.a1(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).a12 = function () {
    var tmp0_safe_receiver = this.w11_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).b12 = function (unconfined) {
    this.u11_1 = this.u11_1.y2(delta(this, unconfined));
    if (!unconfined)
      this.v11_1 = true;
  };
  protoOf(EventLoop).c12 = function (unconfined) {
    this.u11_1 = this.u11_1.z2(delta(this, unconfined));
    if (this.u11_1.a1(new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.v11_1) {
      this.d12();
    }
  };
  protoOf(EventLoop).d12 = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.e12_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).f12 = function () {
    var tmp0_elvis_lhs = this.e12_1.h12();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().e12_1.i12(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).mw = function () {
    return null;
  };
  protoOf(NonDisposableHandle).qy = function () {
  };
  protoOf(NonDisposableHandle).fx = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.u9(Key_instance_2);
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.tv())
      throw _this__u8e3s4.sw();
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.u9(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Current context doesn't contain Job in it: " + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancelAndJoin(_this__u8e3s4, $completion) {
    _this__u8e3s4.cx();
    return _this__u8e3s4.yw($completion);
  }
  function get_isActive_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.u9(Key_instance_2);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tv();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new DisposeOnCompletion(handle);
    return _this__u8e3s4.vw(tmp$ret$1);
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.bx(CancellationException_init_$Create$_0(message, cause));
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.k12_1 = isActive;
  }
  protoOf(Empty).tv = function () {
    return this.k12_1;
  };
  protoOf(Empty).l12 = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.k12_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).tv = function () {
    return true;
  };
  protoOf(NodeList).l12 = function () {
    return this;
  };
  protoOf(NodeList).p12 = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    this_0.o8('List{');
    this_0.o8(state);
    this_0.o8('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.q12_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var node = cur;
        if (first)
          first = false;
        else {
          this_0.o8(', ');
        }
        this_0.n8(node);
      }
      cur = cur.q12_1;
    }
    this_0.o8(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.p12('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  protoOf(JobNode).d13 = function () {
    var tmp = this.c13_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).tv = function () {
    return true;
  };
  protoOf(JobNode).l12 = function () {
    return null;
  };
  protoOf(JobNode).qy = function () {
    return this.d13().zw(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.d13()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.i13_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.i13_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yv_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.j13();
    var exceptions = state.k13(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.nx(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).vz();
      }
    }
    if (!wasCancelling) {
      $this.kx(finalException);
    }
    $this.xv(finalState);
    var casSuccess = $this.mv_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.q()) {
      if (state.j13()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.wv() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = exceptions.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.p(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = exceptions.j();
        while (_iterator__ex2g4s_0.k()) {
          var element_0 = _iterator__ex2g4s_0.l();
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.n() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.n());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.j();
    while (tmp0_iterator.k()) {
      var exception = tmp0_iterator.l();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.e(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        addSuppressed(rootCause, unwrapped);
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.mv_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.kx(null);
    $this.xv(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.lw();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.completeStateFinalization.<anonymous>' call
      tmp0_safe_receiver.qy();
      $this.kw(NonDisposableHandle_instance);
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.yv_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.ew(new CompletionHandlerException('Exception in completion handler ' + toString(state) + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.l12();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.kx(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.q12_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var node = cur;
        try {
          node.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.q12_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      $this.ew(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.lx())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.lw();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.fx(cause) || isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.q12_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var node = cur;
        try {
          node.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.q12_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      $this.ew(tmp0_safe_receiver_0);
    }
    return Unit_instance;
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.k12_1)
        return 0;
      if (!$this.mv_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.rw();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.mv_1.atomicfu$compareAndSet(state, state.l13_1))
          return -1;
        $this.rw();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_0 = tmp1_safe_receiver;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.c13_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      if (!($this.nw() === expect)) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.x12(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.k12_1 ? list : new InactiveNodeList(list);
    $this.mv_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.e13(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var list = state.q12_1;
    $this.mv_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var state = $this.nw();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false))
        return false;
      if (startInternal($this, state) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.d10();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ResumeOnCompletion(cancellable);
    disposeOnCancellation(cancellable, $this.vw(tmp$ret$1));
    return cancellable.vx();
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var state = $this.nw();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.m13();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.wv() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).ix();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = $this.nw();
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        if (tmp1 instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp1.n13())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp1.j13();
          if (!(cause == null) || !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp1.o13(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = tmp1.p13();
          var tmp_0;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
            notifyCancelling($this, tmp1.f13_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp1 == null) ? isInterface(tmp1, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp1.tv()) {
              if (tryMakeCancelling($this, tmp1, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp1, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString_0(tmp1);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.l12();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var message = 'State should have list: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.mv_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.m13())
      return get_COMPLETING_ALREADY();
    finishing.q13(true);
    if (!(finishing === state)) {
      if (!$this.mv_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.j13();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
      finishing.o13(tmp0_safe_receiver.yv_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.p13();
    var tmp_0;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>' call
      notifyCancelling($this, list, tmp2_safe_receiver);
    }
    var child = firstChild($this, state);
    if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yv_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.l12();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.v13_1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var handle = tmp.xw(VOID, false, tmp$ret$1);
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = nextChild_0;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
      return Unit_instance;
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.dw(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (!cur.s12_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      cur = cur.r12_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      cur = cur.q12_1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (cur.s12_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.j13() ? 'Cancelling' : state.m13() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.tv() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    SynchronizedObject.call(this);
    this.f13_1 = list;
    this.g13_1 = atomic$boolean$1(isCompleting);
    this.h13_1 = atomic$ref$1(rootCause);
    this.i13_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).l12 = function () {
    return this.f13_1;
  };
  protoOf(Finishing).q13 = function (value) {
    this.g13_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).m13 = function () {
    return this.g13_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).w13 = function (value) {
    this.h13_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).p13 = function () {
    return this.h13_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).n13 = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).j13 = function () {
    return !(this.p13() == null);
  };
  protoOf(Finishing).tv = function () {
    return this.p13() == null;
  };
  protoOf(Finishing).k13 = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        this_0.e(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.p13();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
      list.h2(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.e(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).o13 = function (exception) {
    var rootCause = this.p13();
    if (rootCause == null) {
      this.w13(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        this_0.e(eh);
        this_0.e(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).e(exception);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.j13() + ', completing=' + this.m13() + ', rootCause=' + toString_0(this.p13()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.f13_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.b14_1 = parent;
    this.c14_1 = state;
    this.d14_1 = child;
    this.e14_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).py = function (cause) {
    continueCompleting(this.b14_1, this.c14_1, this.d14_1, this.e14_1);
  };
  protoOf(ChildCompletion).invoke = function (cause) {
    return this.py(cause);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, 1);
    this.l14_1 = job;
  }
  protoOf(AwaitContinuation).i10 = function (parent) {
    var state = this.l14_1.nw();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.p13();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.yv_1;
    return parent.sw();
  };
  protoOf(AwaitContinuation).o10 = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.d10();
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ResumeAwaitOnCompletion(cont);
    disposeOnCancellation(cont, $this.vw(tmp$ret$1));
    return cont.vx();
  }
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.u14_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).i15 = function ($this$sequence, $completion) {
    var tmp = this.j15($this$sequence, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).ba = function (p1, $completion) {
    return this.i15(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 8;
            this.w14_1 = this.u14_1.nw();
            var tmp_0 = this.w14_1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.h9_1 = 6;
              suspendResult = this.v14_1.jg(this.w14_1.v13_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.w14_1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.x14_1 = this.w14_1.l12();
                if (this.x14_1 == null) {
                  this.y14_1 = null;
                  this.h9_1 = 5;
                  continue $sm;
                } else {
                  var tmp_2 = this;
                  tmp_2.z14_1 = this.x14_1;
                  this.a15_1 = this.z14_1;
                  var tmp_3 = this;
                  tmp_3.b15_1 = this.a15_1;
                  this.c15_1 = this.b15_1;
                  var tmp_4 = this;
                  tmp_4.d15_1 = this.c15_1;
                  this.e15_1 = this.d15_1;
                  this.f15_1 = this.e15_1.q12_1;
                  this.h9_1 = 1;
                  continue $sm;
                }
              } else {
                this.h9_1 = 7;
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.f15_1, this.e15_1)) {
              this.h9_1 = 4;
              continue $sm;
            }

            var tmp_5 = this.f15_1;
            if (tmp_5 instanceof ChildHandleNode) {
              var tmp_6 = this;
              tmp_6.g15_1 = this.f15_1;
              this.h15_1 = this.g15_1;
              this.h9_1 = 2;
              suspendResult = this.v14_1.jg(this.h15_1.v13_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 3;
              continue $sm;
            }

          case 2:
            this.h9_1 = 3;
            continue $sm;
          case 3:
            this.f15_1 = this.f15_1.q12_1;
            this.h9_1 = 1;
            continue $sm;
          case 4:
            var tmp_7 = this;
            tmp_7.y14_1 = Unit_instance;
            this.h9_1 = 5;
            continue $sm;
          case 5:
            this.h9_1 = 7;
            continue $sm;
          case 6:
            this.h9_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 8) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).j15 = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.u14_1, completion);
    i.v14_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.i15($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this.mv_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.nv_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).u = function () {
    return Key_instance_2;
  };
  protoOf(JobSupport).kw = function (value) {
    this.nv_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).lw = function () {
    return this.nv_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).mw = function () {
    var tmp0_safe_receiver = this.lw();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.mw();
  };
  protoOf(JobSupport).ov = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.kw(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.qw();
    var handle = parent.jx(this);
    this.kw(handle);
    if (this.ow()) {
      handle.qy();
      this.kw(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).nw = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.mv_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state instanceof OpDescriptor))
        return state;
      state.k15(this);
    }
  };
  protoOf(JobSupport).tv = function () {
    var state = this.nw();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.tv();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).ow = function () {
    var tmp = this.nw();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).pw = function () {
    var state = this.nw();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.j13();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).qw = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var state = this.nw();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).rw = function () {
  };
  protoOf(JobSupport).sw = function () {
    var state = this.nw();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.p13();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.tw(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.uw(state.yv_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).tw = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.wv() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).uw = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.tw(_this__u8e3s4, message) : $super.tw.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).vw = function (handler) {
    return this.ww(false, true, handler);
  };
  protoOf(JobSupport).ww = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = this.nw();
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        if (tmp1 instanceof Empty) {
          if (tmp1.k12_1) {
            if (this.mv_1.atomicfu$compareAndSet(tmp1, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp1);
          }
        } else {
          if (!(tmp1 == null) ? isInterface(tmp1, Incomplete) : false) {
            var list = tmp1.l12();
            if (list == null) {
              promoteSingleToNodeList(this, tmp1 instanceof JobNode ? tmp1 : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_instance;
              var tmp;
              if (onCancelling) {
                tmp = tmp1 instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
                rootCause = tmp1.p13();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = true;
                } else {
                  var tmp_1;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  if (handler instanceof ChildHandleNode) {
                    tmp_1 = !tmp1.m13();
                  } else {
                    tmp_1 = false;
                  }
                  tmp_0 = tmp_1;
                }
                if (tmp_0) {
                  if (!addLastAtomic(this, tmp1, list, node)) {
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                }
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp1, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp1 instanceof CompletedExceptionally ? tmp1 : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.yv_1);
            }
            return NonDisposableHandle_instance;
          }
        }
      }
    }
  };
  protoOf(JobSupport).yw = function ($completion) {
    if (!joinInternal(this)) {
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp$ret$0 = $completion.n9();
      ensureActive(tmp$ret$0);
      return Unit_instance;
    }
    return joinSuspend(this, $completion);
  };
  protoOf(JobSupport).zw = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var state = this.nw();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.mv_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.l12() == null)) {
            node.w12();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).ax = function () {
    return false;
  };
  protoOf(JobSupport).bx = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.wv() : null, null, this);
    } else {
      tmp = cause;
    }
    this.dx(tmp);
  };
  protoOf(JobSupport).wv = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).dx = function (cause) {
    this.hx(cause);
  };
  protoOf(JobSupport).ex = function (parentJob) {
    this.hx(parentJob);
  };
  protoOf(JobSupport).fx = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.hx(cause) && this.mx();
  };
  protoOf(JobSupport).gx = function (cause) {
    return this.hx(cause);
  };
  protoOf(JobSupport).hx = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.ax()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.dw(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).ix = function () {
    var state = this.nw();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.p13();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.yv_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).h11 = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = this.nw();
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var finalState = tryMakeCompleting(this, tmp1, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.dw(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).bw = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = this.nw();
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var finalState = tryMakeCompleting(this, tmp1, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).j12 = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).jx = function (child) {
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ChildHandleNode(child);
    var tmp = this.xw(true, VOID, tmp$ret$1);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).ew = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).kx = function (cause) {
  };
  protoOf(JobSupport).lx = function () {
    return false;
  };
  protoOf(JobSupport).mx = function () {
    return true;
  };
  protoOf(JobSupport).nx = function (exception) {
    return false;
  };
  protoOf(JobSupport).xv = function (state) {
  };
  protoOf(JobSupport).dw = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.ox() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).ox = function () {
    return this.fw() + '{' + stateString(this, this.nw()) + '}';
  };
  protoOf(JobSupport).fw = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).c11 = function ($completion) {
    $l$loop: while (true) {
      var state = this.nw();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.yv_1;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function InactiveNodeList(list) {
    this.l13_1 = list;
  }
  protoOf(InactiveNodeList).l12 = function () {
    return this.l13_1;
  };
  protoOf(InactiveNodeList).tv = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.l13_1.p12('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.v13_1 = childJob;
  }
  protoOf(ChildHandleNode).mw = function () {
    return this.d13();
  };
  protoOf(ChildHandleNode).py = function (cause) {
    return this.v13_1.ex(this.d13());
  };
  protoOf(ChildHandleNode).invoke = function (cause) {
    return this.py(cause);
  };
  protoOf(ChildHandleNode).fx = function (cause) {
    return this.d13().fx(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.p15_1 = handler;
    this.q15_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).py = function (cause) {
    if (this.q15_1.atomicfu$compareAndSet(0, 1))
      this.p15_1(cause);
  };
  protoOf(InvokeOnCancelling).invoke = function (cause) {
    return this.py(cause);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.v15_1 = handler;
  }
  protoOf(InvokeOnCompletion).py = function (cause) {
    return this.v15_1(cause);
  };
  protoOf(InvokeOnCompletion).invoke = function (cause) {
    return this.py(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.a16_1 = continuation;
  }
  protoOf(ResumeOnCompletion).py = function (cause) {
    // Inline function 'kotlin.coroutines.resume' call
    var this_0 = this.a16_1;
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
    this_0.s9(tmp$ret$0);
    return Unit_instance;
  };
  protoOf(ResumeOnCompletion).invoke = function (cause) {
    return this.py(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b16_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.g16_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).py = function (cause) {
    var state = this.d13().nw();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp0 = this.g16_1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = state.yv_1;
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.s9(tmp$ret$0);
    } else {
      var tmp2 = this.g16_1;
      var tmp = unboxState(state);
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      var tmp$ret$2 = _Result___init__impl__xyqfz8(value);
      tmp2.s9(tmp$ret$2);
    }
  };
  protoOf(ResumeAwaitOnCompletion).invoke = function (cause) {
    return this.py(cause);
  };
  function IncompleteStateBox(state) {
    this.b16_1 = state;
  }
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.l16_1 = child;
  }
  protoOf(ChildContinuation).py = function (cause) {
    this.l16_1.h10(this.l16_1.i10(this.d13()));
  };
  protoOf(ChildContinuation).invoke = function (cause) {
    return this.py(cause);
  };
  function handlesExceptionF($this) {
    var tmp = $this.lw();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d13();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.mx())
        return true;
      var tmp_1 = parentJob.lw();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.d13();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.ov(parent);
    this.o16_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).ax = function () {
    return true;
  };
  protoOf(JobImpl).mx = function () {
    return this.o16_1;
  };
  protoOf(JobImpl).p16 = function (exception) {
    return this.h11(new CompletedExceptionally(exception));
  };
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.u16_1 = handle;
  }
  protoOf(DisposeOnCompletion).py = function (cause) {
    return this.u16_1.qy();
  };
  protoOf(DisposeOnCompletion).invoke = function (cause) {
    return this.py(cause);
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.x16();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).x16 = function () {
    var main = Dispatchers_getInstance().c17();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.w16();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).fx = function (cause) {
    return false;
  };
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.g17_1 = coroutine;
  }
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$3(timeMillis, block, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.n9(), uCont);
    this.w17_1 = time;
  }
  protoOf(TimeoutCoroutine).p10 = function () {
    this.gx(TimeoutCancellationException_0(this.w17_1, get_delay(this.rv_1), this));
  };
  protoOf(TimeoutCoroutine).fw = function () {
    return protoOf(ScopeCoroutine).fw.call(this) + '(timeMillis=' + this.w17_1.toString() + ')';
  };
  function setupTimeout(coroutine, block) {
    var cont = coroutine.gy_1;
    var context = cont.n9();
    disposeOnCompletion(coroutine, get_delay(context).r11(coroutine.w17_1, coroutine, coroutine.rv_1));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCancellationException_0(time, delay, coroutine) {
    var tmp0_safe_receiver = isInterface(delay, DelayWithTimeoutDiagnostics) ? delay : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.time.Companion.milliseconds' call
      Companion_getInstance();
      var tmp$ret$0 = toDuration(time, DurationUnit_MILLISECONDS_getInstance());
      tmp = tmp0_safe_receiver.s11(tmp$ret$0);
    }
    var tmp1_elvis_lhs = tmp;
    var message = tmp1_elvis_lhs == null ? 'Timed out waiting for ' + time.toString() + ' ms' : tmp1_elvis_lhs;
    return new TimeoutCancellationException(message, coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$3(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p17_1 = timeMillis;
    this.q17_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$3).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            if (this.p17_1.a1(new Long(0, 0)) <= 0)
              return null;
            this.r17_1 = {_v: null};
            this.i9_1 = 2;
            this.h9_1 = 1;
            var timeoutCoroutine = new TimeoutCoroutine(this.p17_1, this);
            this.r17_1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.q17_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.i9_1 = 3;
            var tmp_0 = this.k9_1;
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.k9_1;
              if (e.g17_1 === this.r17_1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.k9_1;
            }

          case 3:
            throw this.k9_1;
          case 4:
            this.i9_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i9_1 === 3) {
          throw e_0;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e_0;
        }
      }
     while (true);
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).l11 = function (context) {
    return false;
  };
  protoOf(Unconfined).m11 = function (context, block) {
    var yieldContext = context.u9(Key_instance_3);
    if (!(yieldContext == null)) {
      yieldContext.z17_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function YieldContext() {
    AbstractCoroutineContextElement.call(this, Key_instance_3);
    this.z17_1 = false;
  }
  function Waiter() {
  }
  function yield_0($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.yield.<anonymous>' call
      var context = $completion.n9();
      ensureActive(context);
      var tmp = intercepted($completion);
      var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var cont = tmp_0;
      if (cont.sy_1.l11(context)) {
        cont.a18(context, Unit_instance);
      } else {
        var yieldContext = new YieldContext();
        cont.a18(context.rh(yieldContext), Unit_instance);
        if (yieldContext.z17_1) {
          tmp$ret$0 = yieldUndispatched(cont) ? get_COROUTINE_SUSPENDED() : Unit_instance;
          break $l$block_0;
        }
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  }
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_instance;
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function get_NULL_SEGMENT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NULL_SEGMENT;
  }
  var NULL_SEGMENT;
  function get_SEGMENT_SIZE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  function get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  }
  var EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  function get_BUFFERED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return BUFFERED;
  }
  var BUFFERED;
  function get_IN_BUFFER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return IN_BUFFER;
  }
  var IN_BUFFER;
  function get_RESUMING_BY_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_RCV;
  }
  var RESUMING_BY_RCV;
  function get_RESUMING_BY_EB() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_EB;
  }
  var RESUMING_BY_EB;
  function get_POISONED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return POISONED;
  }
  var POISONED;
  function get_DONE_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return DONE_RCV;
  }
  var DONE_RCV;
  function get_INTERRUPTED_SEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_SEND;
  }
  var INTERRUPTED_SEND;
  function get_INTERRUPTED_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_RCV;
  }
  var INTERRUPTED_RCV;
  function get_CHANNEL_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CHANNEL_CLOSED;
  }
  var CHANNEL_CLOSED;
  function get_SUSPEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND;
  }
  var SUSPEND;
  function get_SUSPEND_NO_WAITER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND_NO_WAITER;
  }
  var SUSPEND_NO_WAITER;
  function get_FAILED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return FAILED;
  }
  var FAILED;
  function get_NO_RECEIVE_RESULT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_RECEIVE_RESULT;
  }
  var NO_RECEIVE_RESULT;
  function get_CLOSE_HANDLER_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_CLOSED;
  }
  var CLOSE_HANDLER_CLOSED;
  function get_CLOSE_HANDLER_INVOKED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_INVOKED;
  }
  var CLOSE_HANDLER_INVOKED;
  function get_NO_CLOSE_CAUSE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_CLOSE_CAUSE;
  }
  var NO_CLOSE_CAUSE;
  function setElementLazy($this, index, value) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    $this.g18_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value = value;
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this.f18_1 = channel;
    this.g18_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).h18 = function () {
    return ensureNotNull(this.f18_1);
  };
  protoOf(ChannelSegment).i18 = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).j18 = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).k18 = function (index) {
    var tmp = this.g18_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ChannelSegment).l18 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.k18(index);
    // Inline function 'kotlinx.coroutines.channels.ChannelSegment.retrieveElement.<anonymous>' call
    this.m18(index);
    return this_0;
  };
  protoOf(ChannelSegment).m18 = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).n18 = function (index) {
    return this.g18_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).o18 = function (index, value) {
    this.g18_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value = value;
  };
  protoOf(ChannelSegment).p18 = function (index, from, to) {
    return this.g18_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).q18 = function (index, update) {
    return this.g18_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).mz = function (index, cause, context) {
    var isSender = index >= get_SEGMENT_SIZE();
    var index_0 = isSender ? index - get_SEGMENT_SIZE() | 0 : index;
    var element = this.k18(index_0);
    $l$loop: while (true) {
      var cur = this.n18(index_0);
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.p18(index_0, cur, update)) {
          this.m18(index_0);
          this.d19(index_0, !isSender);
          if (isSender) {
            var tmp0_safe_receiver = this.h18().s18_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp0_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        }
      } else {
        if (cur === get_INTERRUPTED_SEND() || cur === get_INTERRUPTED_RCV()) {
          this.m18(index_0);
          if (isSender) {
            var tmp1_safe_receiver = this.h18().s18_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp1_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        } else {
          if (cur === get_RESUMING_BY_EB() || cur === get_RESUMING_BY_RCV())
            continue $l$loop;
          else {
            if (cur === get_DONE_RCV() || cur === get_BUFFERED())
              return Unit_instance;
            else {
              if (cur === get_CHANNEL_CLOSED())
                return Unit_instance;
              else {
                // Inline function 'kotlin.error' call
                var message = 'unexpected state: ' + toString_0(cur);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  };
  protoOf(ChannelSegment).d19 = function (index, receiver) {
    if (receiver) {
      var tmp = this.h18();
      var tmp0 = this.kz_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$1 = tmp0.a3(toLong(other)).y2(toLong(index));
      tmp.e19(tmp$ret$1);
    }
    this.f19();
  };
  function onClosedHasNext($this) {
    $this.r19_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.t19_1.u19();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var cause = tmp;
    throw recoverStackTrace_0(cause);
  }
  function hasNextOnNoWaiterSuspend($this, segment, index, r, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>' call
      $this.s19_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var this_0 = $this.t19_1;
      var updCellResult = updateCellReceive(this_0, segment, index, r, $this);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension($this, this_0, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (r.a1(this_0.v19()) < 0) {
          segment.p19();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = this_0.y18_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if (this_0.w19()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>.<anonymous>' call
              onClosedHasNextNoWaiterSuspend($this);
              break $l$block_0;
            }
            var r_0 = this_0.u18_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = r_0.b3(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = r_0.c3(toLong(other_0)).f1();
            if (!segment_0.kz_1.equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this_0, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive(this_0, segment_0, i, r_0, $this);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp1_safe_receiver = (!($this == null) ? isInterface($this, Waiter) : false) ? $this : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this_0, segment_0, i);
              }
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter.<anonymous>' call
            } else if (updCellResult_0 === get_FAILED()) {
              if (r_0.a1(this_0.v19()) < 0) {
                segment_0.p19();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.p19();
              // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>.<anonymous>' call
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              $this.r19_1 = element;
              $this.s19_1 = null;
              var tmp0_safe_receiver = $this.t19_1.s18_1;
              cancellable.ny(true, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cancellable.n9()));
            }
            break $l$block_0;
          }
        }
      } else {
        segment.p19();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        $this.r19_1 = element_0;
        $this.s19_1 = null;
        var tmp0_safe_receiver_0 = $this.t19_1.s18_1;
        cancellable.ny(true, tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, element_0, cancellable.n9()));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.j10();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.vx();
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.s19_1);
    $this.s19_1 = null;
    $this.r19_1 = get_CHANNEL_CLOSED();
    var cause = $this.t19_1.u19();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.s9(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.s9(tmp$ret$2);
    }
  }
  function $hasNextCOROUTINE$7(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f1a_1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$7).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 8;
            var tmp_0 = this;
            tmp_0.g1a_1 = this.f1a_1.t19_1;
            var tmp_1 = this;
            tmp_1.h1a_1 = null;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.j1a_1 = this.g1a_1;
            this.k1a_1 = this.h1a_1;
            this.l1a_1 = this.j1a_1.y18_1.kotlinx$atomicfu$value;
            this.h9_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.h9_1 = 9;
              continue $sm;
            }

            if (this.j1a_1.w19()) {
              var tmp_2 = this;
              tmp_2.i1a_1 = onClosedHasNext(this.f1a_1);
              this.h9_1 = 10;
              continue $sm;
            } else {
              this.h9_1 = 3;
              continue $sm;
            }

          case 3:
            this.m1a_1 = this.j1a_1.u18_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            var tmp0 = this.m1a_1;
            var other = get_SEGMENT_SIZE();
            tmp_3.n1a_1 = tmp0.b3(toLong(other));
            var tmp_4 = this;
            var tmp2 = this.m1a_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_4.o1a_1 = tmp2.c3(toLong(other_0)).f1();
            if (!this.l1a_1.kz_1.equals(this.n1a_1)) {
              this.p1a_1 = findSegmentReceive(this.j1a_1, this.n1a_1, this.l1a_1);
              if (this.p1a_1 == null) {
                this.h9_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                this.q1a_1 = this.p1a_1;
                this.h9_1 = 4;
                continue $sm;
              }
            } else {
              this.h9_1 = 5;
              continue $sm;
            }

          case 4:
            this.l1a_1 = this.q1a_1;
            this.h9_1 = 5;
            continue $sm;
          case 5:
            this.r1a_1 = updateCellReceive(this.j1a_1, this.l1a_1, this.o1a_1, this.m1a_1, this.k1a_1);
            if (this.r1a_1 === get_SUSPEND()) {
              var tmp_6 = this;
              var tmp_7 = this.k1a_1;
              var tmp1_safe_receiver = (!(tmp_7 == null) ? isInterface(tmp_7, Waiter) : false) ? tmp_7 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this.j1a_1, this.l1a_1, this.o1a_1);
              }
              this.l1a_1;
              this.o1a_1;
              this.m1a_1;
              var message = 'unreachable';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (this.r1a_1 === get_FAILED()) {
                if (this.m1a_1.a1(this.j1a_1.v19()) < 0) {
                  this.l1a_1.p19();
                }
                this.h9_1 = 2;
                var tmp_8 = this;
                continue $sm;
              } else {
                if (this.r1a_1 === get_SUSPEND_NO_WAITER()) {
                  var tmp_9 = this;
                  tmp_9.t1a_1 = this.l1a_1;
                  var tmp_10 = this;
                  tmp_10.u1a_1 = this.o1a_1;
                  var tmp_11 = this;
                  tmp_11.v1a_1 = this.m1a_1;
                  this.w1a_1 = this.t1a_1;
                  this.x1a_1 = this.u1a_1;
                  this.y1a_1 = this.v1a_1;
                  this.h9_1 = 6;
                  suspendResult = hasNextOnNoWaiterSuspend(this.f1a_1, this.w1a_1, this.x1a_1, this.y1a_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_12 = this;
                  this.l1a_1.p19();
                  var tmp_13 = this.r1a_1;
                  var element = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
                  this.f1a_1.r19_1 = element;
                  tmp_12.s1a_1 = true;
                  this.h9_1 = 7;
                  continue $sm;
                }
              }
            }

          case 6:
            var tmp_14 = this;
            return suspendResult;
          case 7:
            this.i1a_1 = this.s1a_1;
            this.h9_1 = 10;
            continue $sm;
          case 8:
            throw this.k9_1;
          case 9:
            if (false) {
              this.h9_1 = 1;
              continue $sm;
            }

            this.h9_1 = 10;
            continue $sm;
          case 10:
            return this.i1a_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 8) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.v18_1.kotlinx$atomicfu$value;
  }
  function _get_isRendezvousOrUnlimited__3mdufi($this) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.<get-isRendezvousOrUnlimited>.<anonymous>' call
    var it = _get_bufferEndCounter__2d4hee($this);
    return it.equals(new Long(0, 0)) || it.equals(new Long(-1, 2147483647));
  }
  function onClosedSend($this, element, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.d10();
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.onClosedSend.<anonymous>' call
      var tmp0_safe_receiver = $this.s18_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, $this.z1a());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = recoverStackTrace(tmp1_safe_receiver, cancellable);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
        cancellable.s9(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var exception_0 = $this.z1a();
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = recoverStackTrace(exception_0, cancellable);
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception_1));
      cancellable.s9(tmp$ret$3);
    }
    return cancellable.vx();
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      switch (updateCellSend($this, segment, index, element, s, cancellable, false)) {
        case 0:
          segment.p19();
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call

          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.s9(tmp$ret$0);
          break;
        case 1:
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call

          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.s9(tmp$ret$2);
          break;
        case 2:
          prepareSenderForSuspension(cancellable, $this, segment, index);
          break;
        case 4:
          if (s.a1($this.a1b()) < 0) {
            segment.p19();
          }

          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call

          onClosedSendOnNoWaiterSuspend($this, element, cancellable);
          break;
        case 5:
          segment.p19();
          $l$block_5: {
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
            var segment_0 = access$_get_sendSegment__111kgq($this).kotlinx$atomicfu$value;
            $l$loop_0: while (true) {
              var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s($this).atomicfu$getAndIncrement$long();
              // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
              var s_0 = sendersAndCloseStatusCur.k3(access$_get_SENDERS_COUNTER_MASK_$tBufferedChannelKt_6ll4te());
              var closed = access$_get_isClosedForSend0__sm8f7a($this, sendersAndCloseStatusCur);
              // Inline function 'kotlin.Long.div' call
              var other = get_SEGMENT_SIZE();
              var id = s_0.b3(toLong(other));
              // Inline function 'kotlin.Long.rem' call
              var other_0 = get_SEGMENT_SIZE();
              var i = s_0.c3(toLong(other_0)).f1();
              if (!segment_0.kz_1.equals(id)) {
                var tmp0_elvis_lhs = access$findSegmentSend($this, id, segment_0);
                var tmp;
                if (tmp0_elvis_lhs == null) {
                  var tmp_0;
                  if (closed) {
                    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  } else {
                    continue $l$loop_0;
                  }
                } else {
                  tmp = tmp0_elvis_lhs;
                }
                segment_0 = tmp;
              }
              var tmp1_subject = access$updateCellSend($this, segment_0, i, element, s_0, cancellable, closed);
              if (tmp1_subject === access$_get_RESULT_RENDEZVOUS_$tBufferedChannelKt_ykevfn()) {
                segment_0.p19();
                // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
                // Inline function 'kotlin.coroutines.resume' call
                // Inline function 'kotlin.Companion.success' call
                var tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_instance);
                cancellable.s9(tmp$ret$8);
                break $l$block_5;
              } else if (tmp1_subject === access$_get_RESULT_BUFFERED_$tBufferedChannelKt_tnykj7()) {
                // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
                // Inline function 'kotlin.coroutines.resume' call
                // Inline function 'kotlin.Companion.success' call
                var tmp$ret$10 = _Result___init__impl__xyqfz8(Unit_instance);
                cancellable.s9(tmp$ret$10);
                break $l$block_5;
              } else if (tmp1_subject === access$_get_RESULT_SUSPEND_$tBufferedChannelKt_vus6es()) {
                if (closed) {
                  segment_0.f19();
                  // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  break $l$block_5;
                }
                var tmp2_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
                if (tmp2_safe_receiver == null)
                  null;
                else {
                  access$prepareSenderForSuspension($this, tmp2_safe_receiver, segment_0, i);
                }
                // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter.<anonymous>' call
                break $l$block_5;
              } else if (tmp1_subject === access$_get_RESULT_CLOSED_$tBufferedChannelKt_3eqb16()) {
                if (s_0.a1($this.a1b()) < 0) {
                  segment_0.p19();
                }
                // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
                onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                break $l$block_5;
              } else if (tmp1_subject === access$_get_RESULT_FAILED_$tBufferedChannelKt_wacckr()) {
                segment_0.p19();
                continue $l$loop_0;
              } else if (tmp1_subject === access$_get_RESULT_SUSPEND_NO_WAITER_$tBufferedChannelKt_61h09f()) {
                // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
                var message = 'unexpected';
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }

          break;
        default:
          // Inline function 'kotlin.error' call

          var message_0 = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.j10();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.vx();
  }
  function prepareSenderForSuspension(_this__u8e3s4, $this, segment, index) {
    _this__u8e3s4.m10(segment, index + get_SEGMENT_SIZE() | 0);
  }
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp0_safe_receiver = $this.s18_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, element, cont.n9());
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = recoverStackTrace($this.z1a(), cont);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.s9(tmp$ret$0);
  }
  function SendBroadcast() {
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.j18(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.n18(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.p18(index, null, get_BUFFERED())) {
          return 1;
        }
      } else {
        if (waiter == null) {
          return 3;
        } else {
          if (segment.p18(index, null, waiter))
            return 2;
        }
      }
    } else {
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        segment.m18(index);
        var tmp;
        if (tryResumeReceiver(state, $this, element)) {
          segment.o18(index, get_DONE_RCV());
          $this.b1b();
          tmp = 0;
        } else {
          if (!(segment.q18(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.d19(index, true);
          }
          tmp = 5;
        }
        return tmp;
      }
    }
    return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
  }
  function updateCellSendSlow($this, segment, index, element, s, waiter, closed) {
    while (true) {
      var state = segment.n18(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) && !closed) {
          if (segment.p18(index, null, get_BUFFERED())) {
            return 1;
          }
        } else {
          if (closed) {
            if (segment.p18(index, null, get_INTERRUPTED_SEND())) {
              segment.d19(index, false);
              return 4;
            }
          } else if (waiter == null)
            return 3;
          else if (segment.p18(index, null, waiter))
            return 2;
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.p18(index, state, get_BUFFERED())) {
          return 1;
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.m18(index);
        return 5;
      } else if (state === get_POISONED()) {
        segment.m18(index);
        return 5;
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.m18(index);
        completeCloseOrCancel($this);
        return 4;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.m18(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.c1b_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver(receiver, $this, element)) {
          segment.o18(index, get_DONE_RCV());
          $this.b1b();
          tmp_0 = 0;
        } else {
          if (!(segment.q18(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.d19(index, true);
          }
          tmp_0 = 5;
        }
        return tmp_0;
      }
    }
  }
  function shouldSendSuspend0($this, curSendersAndCloseStatus) {
    if (_get_isClosedForSend0__kxgf9m(curSendersAndCloseStatus, $this))
      return false;
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var tmp$ret$0 = curSendersAndCloseStatus.k3(new Long(-1, 268435455));
    return !bufferOrRendezvousSend($this, tmp$ret$0);
  }
  function bufferOrRendezvousSend($this, curSenders) {
    var tmp;
    if (curSenders.a1(_get_bufferEndCounter__2d4hee($this)) < 0) {
      tmp = true;
    } else {
      var tmp0 = $this.a1b();
      // Inline function 'kotlin.Long.plus' call
      var other = $this.r18_1;
      var tmp$ret$0 = tmp0.y2(toLong(other));
      tmp = curSenders.a1(tmp$ret$0) < 0;
    }
    return tmp;
  }
  function tryResumeReceiver(_this__u8e3s4, $this, element) {
    var tmp;
    if (isInterface(_this__u8e3s4, SelectInstance)) {
      tmp = _this__u8e3s4.h1b($this, element);
    } else {
      if (_this__u8e3s4 instanceof ReceiveCatching) {
        if (!(_this__u8e3s4 instanceof ReceiveCatching))
          THROW_CCE();
        var tmp_0 = Companion_getInstance_0().f1b(element);
        var tmp1_safe_receiver = $this.s18_1;
        tmp = tryResume0(_this__u8e3s4.g1b_1, new ChannelResult(tmp_0), tmp1_safe_receiver == null ? null : bindCancellationFun(tmp1_safe_receiver, element, _this__u8e3s4.g1b_1.n9()));
      } else {
        if (_this__u8e3s4 instanceof BufferedChannelIterator) {
          if (!(_this__u8e3s4 instanceof BufferedChannelIterator))
            THROW_CCE();
          tmp = _this__u8e3s4.d1b(element);
        } else {
          if (isInterface(_this__u8e3s4, CancellableContinuation)) {
            if (!isInterface(_this__u8e3s4, CancellableContinuation))
              THROW_CCE();
            var tmp2_safe_receiver = $this.s18_1;
            tmp = tryResume0(_this__u8e3s4, element, tmp2_safe_receiver == null ? null : bindCancellationFun(tmp2_safe_receiver, element, _this__u8e3s4.n9()));
          } else {
            var message = 'Unexpected receiver type: ' + toString(_this__u8e3s4);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
    }
    return tmp;
  }
  function receiveOnNoWaiterSuspend($this, segment, index, r, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveOnNoWaiterSuspend.<anonymous>' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this, segment, index, r, cancellable);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension(cancellable, $this, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (r.a1($this.v19()) < 0) {
          segment.p19();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.y18_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if ($this.w19()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveOnNoWaiterSuspend.<anonymous>.<anonymous>' call
              onClosedReceiveOnNoWaiterSuspend($this, cancellable);
              break $l$block_0;
            }
            var r_0 = $this.u18_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = r_0.b3(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = r_0.c3(toLong(other_0)).f1();
            if (!segment_0.kz_1.equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, cancellable);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp1_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, $this, segment_0, i);
              }
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter.<anonymous>' call
            } else if (updCellResult_0 === get_FAILED()) {
              if (r_0.a1($this.v19()) < 0) {
                segment_0.p19();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.p19();
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveOnNoWaiterSuspend.<anonymous>.<anonymous>' call
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              var tmp0_safe_receiver = $this.s18_1;
              var onCancellation = tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cancellable.n9());
              cancellable.ny(element, onCancellation);
            }
            break $l$block_0;
          }
        }
      } else {
        segment.p19();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        var tmp0_safe_receiver_0 = $this.s18_1;
        var onCancellation_0 = tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, element_0, cancellable.n9());
        cancellable.ny(element_0, onCancellation_0);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.j10();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.vx();
  }
  function prepareReceiverForSuspension(_this__u8e3s4, $this, segment, index) {
    $this.i1b();
    _this__u8e3s4.m10(segment, index);
  }
  function onClosedReceiveOnNoWaiterSuspend($this, cont) {
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = _get_receiveException__foorc1($this);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.s9(tmp$ret$0);
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.n18(index);
    if (state === null) {
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var senders = $this.t18_1.kotlinx$atomicfu$value.k3(new Long(-1, 268435455));
      if (r.a1(senders) >= 0) {
        if (waiter === null) {
          return get_SUSPEND_NO_WAITER();
        }
        if (segment.p18(index, state, waiter)) {
          expandBuffer($this);
          return get_SUSPEND();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.p18(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.l18(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.n18(index);
      if (state === null || state === get_IN_BUFFER()) {
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var senders = $this.t18_1.kotlinx$atomicfu$value.k3(new Long(-1, 268435455));
        if (r.a1(senders) < 0) {
          if (segment.p18(index, state, get_POISONED())) {
            expandBuffer($this);
            return get_FAILED();
          }
        } else {
          if (waiter === null) {
            return get_SUSPEND_NO_WAITER();
          }
          if (segment.p18(index, state, waiter)) {
            expandBuffer($this);
            return get_SUSPEND();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.p18(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.l18(index);
        }
      } else if (state === get_INTERRUPTED_SEND())
        return get_FAILED();
      else if (state === get_POISONED())
        return get_FAILED();
      else if (state === get_CHANNEL_CLOSED()) {
        expandBuffer($this);
        return get_FAILED();
      } else if (state === get_RESUMING_BY_EB())
        continue $l$loop;
      else {
        if (segment.p18(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.c1b_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender(sender, $this, segment, index)) {
            segment.o18(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.l18(index);
          } else {
            segment.o18(index, get_INTERRUPTED_SEND());
            segment.d19(index, false);
            if (helpExpandBuffer) {
              expandBuffer($this);
            }
            tmp_0 = get_FAILED();
          }
          return tmp_0;
        }
      }
    }
  }
  function tryResumeSender(_this__u8e3s4, $this, segment, index) {
    var tmp;
    if (isInterface(_this__u8e3s4, CancellableContinuation)) {
      if (!isInterface(_this__u8e3s4, CancellableContinuation))
        THROW_CCE();
      tmp = tryResume0(_this__u8e3s4, Unit_instance);
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        if (!(_this__u8e3s4 instanceof SelectImplementation))
          THROW_CCE();
        var trySelectResult = _this__u8e3s4.n1b($this, Unit_instance);
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.m18(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if (_this__u8e3s4 instanceof SendBroadcast) {
          tmp = tryResume0(_this__u8e3s4.j1b_1, true);
        } else {
          var message = 'Unexpected waiter: ' + toString(_this__u8e3s4);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp;
  }
  function expandBuffer($this) {
    if (_get_isRendezvousOrUnlimited__3mdufi($this))
      return Unit_instance;
    var segment = $this.z18_1.kotlinx$atomicfu$value;
    try_again: while (true) {
      var b = $this.v18_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = b.b3(toLong(other));
      var s = $this.v19();
      if (s.a1(b) <= 0) {
        if (segment.kz_1.a1(id) < 0 && !(segment.l19() == null)) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      }
      if (!segment.kz_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentBufferEnd($this, id, segment, b);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue try_again;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = b.c3(toLong(other_0)).f1();
      if (updateCellExpandBuffer($this, segment, i, b)) {
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      } else {
        incCompletedExpandBufferAttempts$default($this);
        continue try_again;
      }
    }
  }
  function updateCellExpandBuffer($this, segment, index, b) {
    var state = segment.n18(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (b.a1($this.u18_1.kotlinx$atomicfu$value) >= 0) {
        if (segment.p18(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender(state, $this, segment, index)) {
            segment.o18(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.o18(index, get_INTERRUPTED_SEND());
            segment.d19(index, false);
            tmp = false;
          }
          return tmp;
        }
      }
    }
    return updateCellExpandBufferSlow($this, segment, index, b);
  }
  function updateCellExpandBufferSlow($this, segment, index, b) {
    $l$loop: while (true) {
      var state = segment.n18(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (b.a1($this.u18_1.kotlinx$atomicfu$value) < 0) {
          if (segment.p18(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.p18(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender(state, $this, segment, index)) {
              segment.o18(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.o18(index, get_INTERRUPTED_SEND());
              segment.d19(index, false);
              tmp = false;
            }
            return tmp;
          }
        }
      } else {
        if (state === get_INTERRUPTED_SEND())
          return false;
        else {
          if (state === null) {
            if (segment.p18(index, state, get_IN_BUFFER()))
              return true;
          } else {
            if (state === get_BUFFERED())
              return true;
            else {
              if (state === get_POISONED() || state === get_DONE_RCV() || state === get_INTERRUPTED_RCV())
                return true;
              else {
                if (state === get_CHANNEL_CLOSED())
                  return true;
                else {
                  if (state === get_RESUMING_BY_RCV())
                    continue $l$loop;
                  else {
                    // Inline function 'kotlin.error' call
                    var message = 'Unexpected cell state: ' + toString_0(state);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts($this, nAttempts) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.incCompletedExpandBufferAttempts.<anonymous>' call
    // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
    if (!$this.w18_1.atomicfu$addAndGet$long(nAttempts).k3(new Long(0, 1073741824)).equals(new Long(0, 0))) {
      $l$loop: while (true) {
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        if (!!$this.w18_1.kotlinx$atomicfu$value.k3(new Long(0, 1073741824)).equals(new Long(0, 0))) {
          break $l$loop;
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts$default($this, nAttempts, $super) {
    nAttempts = nAttempts === VOID ? new Long(1, 0) : nAttempts;
    return incCompletedExpandBufferAttempts($this, nAttempts);
  }
  function BufferedChannelIterator($outer) {
    this.t19_1 = $outer;
    this.r19_1 = get_NO_RECEIVE_RESULT();
    this.s19_1 = null;
  }
  protoOf(BufferedChannelIterator).o1b = function ($completion) {
    var tmp = new $hasNextCOROUTINE$7(this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(BufferedChannelIterator).m10 = function (segment, index) {
    var tmp0_safe_receiver = this.s19_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.m10(segment, index);
    }
  };
  protoOf(BufferedChannelIterator).l = function () {
    var result = this.r19_1;
    // Inline function 'kotlin.check' call
    if (!!(result === get_NO_RECEIVE_RESULT())) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.next.<anonymous>' call
      var message = '`hasNext()` has not been invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.r19_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.t19_1));
    return (result == null ? true : !(result == null)) ? result : THROW_CCE();
  };
  protoOf(BufferedChannelIterator).d1b = function (element) {
    var cont = ensureNotNull(this.s19_1);
    this.s19_1 = null;
    this.r19_1 = element;
    var tmp0_safe_receiver = this.t19_1.s18_1;
    return tryResume0(cont, true, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cont.n9()));
  };
  protoOf(BufferedChannelIterator).p1b = function () {
    var cont = ensureNotNull(this.s19_1);
    this.s19_1 = null;
    this.r19_1 = get_CHANNEL_CLOSED();
    var cause = this.t19_1.u19();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.s9(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.s9(tmp$ret$2);
    }
  };
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.u19();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException('Channel was closed') : tmp0_elvis_lhs;
  }
  function invokeCloseHandler($this) {
    var tmp0 = $this.c19_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.getAndUpdate' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.invokeCloseHandler.<anonymous>' call
        var tmp;
        if (cur === null) {
          tmp = get_CLOSE_HANDLER_CLOSED();
        } else {
          tmp = get_CLOSE_HANDLER_INVOKED();
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = cur;
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var closeHandler = tmp_0;
    if (typeof closeHandler !== 'function')
      THROW_CCE();
    closeHandler($this.u19());
  }
  function markClosed($this) {
    var tmp0 = $this.t18_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markClosed.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        var tmp;
        switch (cur.i3(60).f1()) {
          case 0:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$1 = cur.k3(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$1, 2);
            break;
          case 1:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$2 = cur.k3(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$2, 3);
            break;
          default:
            return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$4 = Unit_instance;
          break $l$block;
        }
      }
    }
    return tmp$ret$4;
  }
  function markCancelled($this) {
    var tmp0 = $this.t18_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markCancelled.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var tmp$ret$0 = cur.k3(new Long(-1, 268435455));
        var upd = constructSendersAndCloseStatus(tmp$ret$0, 3);
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$2 = Unit_instance;
          break $l$block;
        }
      }
    }
    return tmp$ret$2;
  }
  function markCancellationStarted($this) {
    var tmp0 = $this.t18_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markCancellationStarted.<anonymous>' call
        var tmp;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        if (cur.i3(60).f1() === 0) {
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          var tmp$ret$1 = cur.k3(new Long(-1, 268435455));
          tmp = constructSendersAndCloseStatus(tmp$ret$1, 1);
        } else {
          return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$3 = Unit_instance;
          break $l$block;
        }
      }
    }
    return tmp$ret$3;
  }
  function completeCloseOrCancel($this) {
    $this.q1b();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.s1b()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!lastBufferedCellGlobalIndex.equals(new Long(-1, -1))) {
        $this.r1b(lastBufferedCellGlobalIndex);
      }
    }
    cancelSuspendedReceiveRequests($this, lastSegment, sendersCur);
    return lastSegment;
  }
  function completeCancel($this, sendersCur) {
    var lastSegment = completeClose($this, sendersCur);
    removeUnprocessedElements($this, lastSegment);
  }
  function closeLinkedList($this) {
    var lastSegment = $this.z18_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.closeLinkedList.<anonymous>' call
    var it = $this.x18_1.kotlinx$atomicfu$value;
    if (it.kz_1.a1(lastSegment.kz_1) > 0)
      lastSegment = it;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.closeLinkedList.<anonymous>' call
    var it_0 = $this.y18_1.kotlinx$atomicfu$value;
    if (it_0.kz_1.a1(lastSegment.kz_1) > 0)
      lastSegment = it_0;
    return close(lastSegment);
  }
  function markAllEmptyCellsAsClosed($this, lastSegment) {
    var segment = lastSegment;
    while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.kz_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var globalIndex = tmp0.a3(toLong(other)).y2(toLong(index));
          if (globalIndex.a1($this.a1b()) < 0)
            return new Long(-1, -1);
          cell_update: while (true) {
            var state = segment.n18(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.p18(index, state, get_CHANNEL_CLOSED())) {
                segment.f19();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp1_elvis_lhs = segment.o19();
      var tmp;
      if (tmp1_elvis_lhs == null) {
        return new Long(-1, -1);
      } else {
        tmp = tmp1_elvis_lhs;
      }
      segment = tmp;
    }
  }
  function removeUnprocessedElements($this, lastSegment) {
    var onUndeliveredElement = $this.s18_1;
    var undeliveredElementException = null;
    var suspendedSenders = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.kz_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var globalIndex = tmp0.a3(toLong(other)).y2(toLong(index));
          update_cell: while (true) {
            var state = segment.n18(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (globalIndex.a1($this.a1b()) < 0)
                  break process_segments;
                if (segment.p18(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.k18(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.m18(index);
                  segment.f19();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() || state === null) {
                  if (segment.p18(index, state, get_CHANNEL_CLOSED())) {
                    segment.f19();
                    break update_cell;
                  }
                } else {
                  var tmp;
                  if (!(state == null) ? isInterface(state, Waiter) : false) {
                    tmp = true;
                  } else {
                    tmp = state instanceof WaiterEB;
                  }
                  if (tmp) {
                    if (globalIndex.a1($this.a1b()) < 0)
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.c1b_1;
                    } else {
                      tmp_0 = (!(state == null) ? isInterface(state, Waiter) : false) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.p18(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.k18(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.m18(index);
                      segment.f19();
                      break update_cell;
                    }
                  } else {
                    if (state === get_RESUMING_BY_EB() || state === get_RESUMING_BY_RCV())
                      break process_segments;
                    else {
                      if (state === get_RESUMING_BY_EB())
                        continue update_cell;
                      else {
                        break update_cell;
                      }
                    }
                  }
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      var tmp1_elvis_lhs = segment.o19();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        break process_segments;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      segment = tmp_1;
    }
    var tmp4 = suspendedSenders;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp4);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp_2 = access$_get_holder__kkflen(tmp4);
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.removeUnprocessedElements.<anonymous>' call
          var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          resumeSenderOnCancelledChannel(it, $this);
        } else {
          var tmp_3 = access$_get_holder__kkflen(tmp4);
          var list = tmp_3 instanceof ArrayList ? tmp_3 : THROW_CCE();
          var inductionVariable_0 = list.n() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.removeUnprocessedElements.<anonymous>' call
              var it_0 = list.p(i);
              resumeSenderOnCancelledChannel(it_0, $this);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    var tmp2_safe_receiver = undeliveredElementException;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp2_safe_receiver;
    }
  }
  function cancelSuspendedReceiveRequests($this, lastSegment, sendersCounter) {
    var suspendedReceivers = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (!(segment == null)) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.kz_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          if (tmp0.a3(toLong(other)).y2(toLong(index)).a1(sendersCounter) < 0)
            break process_segments;
          cell_update: while (true) {
            var state = segment.n18(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.p18(index, state, get_CHANNEL_CLOSED())) {
                segment.f19();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.p18(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.c1b_1);
                  segment.d19(index, true);
                  break cell_update;
                }
              } else {
                if (!(state == null) ? isInterface(state, Waiter) : false) {
                  if (segment.p18(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.d19(index, true);
                    break cell_update;
                  }
                } else {
                  break cell_update;
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      segment = segment.o19();
    }
    var tmp4 = suspendedReceivers;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp4);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp = access$_get_holder__kkflen(tmp4);
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.cancelSuspendedReceiveRequests.<anonymous>' call
          var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          resumeReceiverOnClosedChannel(it, $this);
        } else {
          var tmp_0 = access$_get_holder__kkflen(tmp4);
          var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable_0 = list.n() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.cancelSuspendedReceiveRequests.<anonymous>' call
              var it_0 = list.p(i);
              resumeReceiverOnClosedChannel(it_0, $this);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
  }
  function resumeReceiverOnClosedChannel(_this__u8e3s4, $this) {
    return resumeWaiterOnClosedChannel(_this__u8e3s4, $this, true);
  }
  function resumeSenderOnCancelledChannel(_this__u8e3s4, $this) {
    return resumeWaiterOnClosedChannel(_this__u8e3s4, $this, false);
  }
  function resumeWaiterOnClosedChannel(_this__u8e3s4, $this, receiver) {
    if (_this__u8e3s4 instanceof SendBroadcast) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = _this__u8e3s4.j1b_1;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      this_0.s9(tmp$ret$0);
    } else {
      if (isInterface(_this__u8e3s4, CancellableContinuation)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = receiver ? _get_receiveException__foorc1($this) : $this.z1a();
        var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
        _this__u8e3s4.s9(tmp$ret$2);
      } else {
        if (_this__u8e3s4 instanceof ReceiveCatching) {
          var tmp4 = _this__u8e3s4.g1b_1;
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = new ChannelResult(Companion_getInstance_0().t1b($this.u19()));
          var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
          tmp4.s9(tmp$ret$4);
        } else {
          if (_this__u8e3s4 instanceof BufferedChannelIterator) {
            _this__u8e3s4.p1b();
          } else {
            if (isInterface(_this__u8e3s4, SelectInstance)) {
              _this__u8e3s4.h1b($this, get_CHANNEL_CLOSED());
            } else {
              // Inline function 'kotlin.error' call
              var message = 'Unexpected waiter: ' + toString(_this__u8e3s4);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  }
  function _get_isClosedForSend0__kxgf9m(_this__u8e3s4, $this) {
    return isClosed($this, _this__u8e3s4, false);
  }
  function _get_isClosedForReceive0__f7qknl(_this__u8e3s4, $this) {
    return isClosed($this, _this__u8e3s4, true);
  }
  function isClosed($this, sendersAndCloseStatusCur, isClosedForReceive) {
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp;
    switch (sendersAndCloseStatusCur.i3(60).f1()) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$1 = sendersAndCloseStatusCur.k3(new Long(-1, 268435455));
        completeClose($this, tmp$ret$1);
        tmp = isClosedForReceive ? !$this.u1b() : true;
        break;
      case 3:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$2 = sendersAndCloseStatusCur.k3(new Long(-1, 268435455));
        completeCancel($this, tmp$ret$2);
        tmp = true;
        break;
      default:
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call

        var message = 'unexpected close status: ' + sendersAndCloseStatusCur.i3(60).f1();
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function isCellNonEmpty($this, segment, index, globalIndex) {
    while (true) {
      var state = segment.n18(index);
      if (state === null || state === get_IN_BUFFER()) {
        if (segment.p18(index, state, get_POISONED())) {
          expandBuffer($this);
          return false;
        }
      } else if (state === get_BUFFERED())
        return true;
      else if (state === get_INTERRUPTED_SEND())
        return false;
      else if (state === get_CHANNEL_CLOSED())
        return false;
      else if (state === get_DONE_RCV())
        return false;
      else if (state === get_POISONED())
        return false;
      else if (state === get_RESUMING_BY_EB())
        return true;
      else if (state === get_RESUMING_BY_RCV())
        return false;
      else
        return globalIndex.equals($this.a1b());
    }
  }
  function findSegmentSend($this, id, startFrom) {
    var tmp0 = $this.x18_1;
    var tmp3 = createSegmentFunction();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp3);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp1 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = tmp0.kotlinx$atomicfu$value;
              if (cur.kz_1.a1(tmp1.kz_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp1.h19()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.i19()) {
                  cur.l4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp1.i19()) {
                tmp1.l4();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentSend.<anonymous>' call
    var it = tmp$ret$1;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.kz_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      if (tmp0_0.a3(toLong(other)).a1($this.a1b()) < 0) {
        startFrom.p19();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.kz_1.a1(id) > 0) {
        var tmp2 = segment.kz_1;
        // Inline function 'kotlin.Long.times' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = tmp2.a3(toLong(other_0));
        updateSendersCounterIfLower($this, tmp$ret$3);
        var tmp4 = segment.kz_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        if (tmp4.a3(toLong(other_1)).a1($this.a1b()) < 0) {
          segment.p19();
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function findSegmentReceive($this, id, startFrom) {
    var tmp0 = $this.y18_1;
    var tmp3 = createSegmentFunction();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp3);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp1 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = tmp0.kotlinx$atomicfu$value;
              if (cur.kz_1.a1(tmp1.kz_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp1.h19()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.i19()) {
                  cur.l4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp1.i19()) {
                tmp1.l4();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentReceive.<anonymous>' call
    var it = tmp$ret$1;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.kz_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      if (tmp0_0.a3(toLong(other)).a1($this.v19()) < 0) {
        startFrom.p19();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (!_get_isRendezvousOrUnlimited__3mdufi($this)) {
        var tmp2 = _get_bufferEndCounter__2d4hee($this);
        // Inline function 'kotlin.Long.div' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = tmp2.b3(toLong(other_0));
        tmp_1 = id.a1(tmp$ret$3) <= 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp4 = $this.z18_1;
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          while (true) {
            // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
            var cur_0 = tmp4.kotlinx$atomicfu$value;
            if (cur_0.kz_1.a1(segment.kz_1) >= 0) {
              break $l$block_5;
            }
            if (!segment.h19()) {
              break $l$block_5;
            }
            if (tmp4.atomicfu$compareAndSet(cur_0, segment)) {
              if (cur_0.i19()) {
                cur_0.l4();
              }
              break $l$block_5;
            }
            if (segment.i19()) {
              segment.l4();
            }
          }
        }
      }
      var tmp_2;
      if (segment.kz_1.a1(id) > 0) {
        var tmp6 = segment.kz_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$5 = tmp6.a3(toLong(other_1));
        updateReceiversCounterIfLower($this, tmp$ret$5);
        var tmp8 = segment.kz_1;
        // Inline function 'kotlin.Long.times' call
        var other_2 = get_SEGMENT_SIZE();
        if (tmp8.a3(toLong(other_2)).a1($this.v19()) < 0) {
          segment.p19();
        }
        tmp_2 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_2 = segment;
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function findSegmentBufferEnd($this, id, startFrom, currentBufferEndCounter) {
    var tmp0 = $this.z18_1;
    var tmp3 = createSegmentFunction();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp3);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp1 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = tmp0.kotlinx$atomicfu$value;
              if (cur.kz_1.a1(tmp1.kz_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp1.h19()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.i19()) {
                  cur.l4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp1.i19()) {
                tmp1.l4();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentBufferEnd.<anonymous>' call
    var it = tmp$ret$1;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom);
      incCompletedExpandBufferAttempts$default($this);
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.kz_1.a1(id) > 0) {
        // Inline function 'kotlin.Long.plus' call
        var tmp_2 = currentBufferEndCounter.y2(toLong(1));
        var tmp2 = segment.kz_1;
        // Inline function 'kotlin.Long.times' call
        var other = get_SEGMENT_SIZE();
        var tmp$ret$3 = tmp2.a3(toLong(other));
        if ($this.v18_1.atomicfu$compareAndSet(tmp_2, tmp$ret$3)) {
          var tmp4 = segment.kz_1;
          // Inline function 'kotlin.Long.times' call
          var other_0 = get_SEGMENT_SIZE();
          var tmp$ret$4 = tmp4.a3(toLong(other_0));
          incCompletedExpandBufferAttempts($this, tmp$ret$4.z2(currentBufferEndCounter));
        } else {
          incCompletedExpandBufferAttempts$default($this);
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom) {
    var segment = startFrom;
    $l$loop: while (segment.kz_1.a1(id) < 0) {
      var tmp0_elvis_lhs = segment.l19();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.g19()) {
        var tmp1_elvis_lhs = segment.l19();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        segment = tmp_0;
      }
      var tmp0 = $this.z18_1;
      var tmp1 = segment;
      var tmp$ret$0;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.moveForward' call
        while (true) {
          // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
          var cur = tmp0.kotlinx$atomicfu$value;
          if (cur.kz_1.a1(tmp1.kz_1) >= 0) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!tmp1.h19()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (tmp0.atomicfu$compareAndSet(cur, tmp1)) {
            if (cur.i19()) {
              cur.l4();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (tmp1.i19()) {
            tmp1.l4();
          }
        }
        tmp$ret$0 = Unit_instance;
      }
      if (tmp$ret$0)
        return Unit_instance;
    }
  }
  function updateSendersCounterIfLower($this, value) {
    var this_0 = $this.t18_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.updateSendersCounterIfLower.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var curCounter = cur.k3(new Long(-1, 268435455));
      if (curCounter.a1(value) >= 0)
        return Unit_instance;
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      var tmp$ret$1 = cur.i3(60).f1();
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$1);
      if ($this.t18_1.atomicfu$compareAndSet(cur, update))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function updateReceiversCounterIfLower($this, value) {
    var this_0 = $this.u18_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.updateReceiversCounterIfLower.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      if (cur.a1(value) >= 0)
        return Unit_instance;
      if ($this.u18_1.atomicfu$compareAndSet(cur, value))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function access$_get_sendersAndCloseStatus__tvw29s($this) {
    return $this.t18_1;
  }
  function access$_get_sendSegment__111kgq($this) {
    return $this.x18_1;
  }
  function access$prepareSenderForSuspension($this, $receiver, segment, index) {
    return prepareSenderForSuspension($receiver, $this, segment, index);
  }
  function access$updateCellSend($this, segment, index, element, s, waiter, closed) {
    return updateCellSend($this, segment, index, element, s, waiter, closed);
  }
  function access$_get_isClosedForSend0__sm8f7a($this, $receiver) {
    return _get_isClosedForSend0__kxgf9m($receiver, $this);
  }
  function access$findSegmentSend($this, id, startFrom) {
    return findSegmentSend($this, id, startFrom);
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda($element, this$0, $select) {
    return function (it) {
      var tmp;
      if (!($element === get_CHANNEL_CLOSED())) {
        callUndeliveredElement(this$0.s18_1, ($element == null ? true : !($element == null)) ? $element : THROW_CCE(), $select.n9());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this$0) {
    return function (select, _anonymous_parameter_1__qggqgd, element) {
      return BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda(element, this$0, select);
    };
  }
  function $sendCOROUTINE$4(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e1c_1 = _this__u8e3s4;
    this.f1c_1 = element;
  }
  protoOf($sendCOROUTINE$4).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 11;
            var tmp_0 = this;
            tmp_0.g1c_1 = this.e1c_1;
            var tmp_1 = this;
            tmp_1.h1c_1 = this.f1c_1;
            var tmp_2 = this;
            tmp_2.i1c_1 = null;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.k1c_1 = this.g1c_1;
            this.l1c_1 = this.h1c_1;
            this.m1c_1 = this.i1c_1;
            this.n1c_1 = access$_get_sendSegment__111kgq(this.k1c_1).kotlinx$atomicfu$value;
            this.h9_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.h9_1 = 12;
              continue $sm;
            }

            this.o1c_1 = access$_get_sendersAndCloseStatus__tvw29s(this.k1c_1).atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            tmp_3.p1c_1 = this.o1c_1.k3(access$_get_SENDERS_COUNTER_MASK_$tBufferedChannelKt_6ll4te());
            this.q1c_1 = access$_get_isClosedForSend0__sm8f7a(this.k1c_1, this.o1c_1);
            var tmp_4 = this;
            var tmp0 = this.p1c_1;
            var other = get_SEGMENT_SIZE();
            tmp_4.r1c_1 = tmp0.b3(toLong(other));
            var tmp_5 = this;
            var tmp2 = this.p1c_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_5.s1c_1 = tmp2.c3(toLong(other_0)).f1();
            if (!this.n1c_1.kz_1.equals(this.r1c_1)) {
              this.t1c_1 = access$findSegmentSend(this.k1c_1, this.r1c_1, this.n1c_1);
              if (this.t1c_1 == null) {
                if (this.q1c_1) {
                  this.h9_1 = 10;
                  suspendResult = onClosedSend(this.e1c_1, this.f1c_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.h9_1 = 2;
                  continue $sm;
                }
              } else {
                this.u1c_1 = this.t1c_1;
                this.h9_1 = 3;
                continue $sm;
              }
            } else {
              this.h9_1 = 4;
              continue $sm;
            }

          case 3:
            this.n1c_1 = this.u1c_1;
            this.h9_1 = 4;
            continue $sm;
          case 4:
            this.v1c_1 = access$updateCellSend(this.k1c_1, this.n1c_1, this.s1c_1, this.l1c_1, this.p1c_1, this.m1c_1, this.q1c_1);
            if (this.v1c_1 === access$_get_RESULT_RENDEZVOUS_$tBufferedChannelKt_ykevfn()) {
              this.n1c_1.p19();
              var tmp_6 = this;
              tmp_6.j1c_1 = Unit_instance;
              this.h9_1 = 13;
              continue $sm;
            } else {
              if (this.v1c_1 === access$_get_RESULT_BUFFERED_$tBufferedChannelKt_tnykj7()) {
                var tmp_7 = this;
                tmp_7.j1c_1 = Unit_instance;
                this.h9_1 = 13;
                continue $sm;
              } else {
                if (this.v1c_1 === access$_get_RESULT_SUSPEND_$tBufferedChannelKt_vus6es()) {
                  if (this.q1c_1) {
                    this.n1c_1.f19();
                    this.h9_1 = 9;
                    suspendResult = onClosedSend(this.e1c_1, this.f1c_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.h9_1 = 8;
                    continue $sm;
                  }
                } else {
                  if (this.v1c_1 === access$_get_RESULT_CLOSED_$tBufferedChannelKt_3eqb16()) {
                    if (this.p1c_1.a1(this.k1c_1.a1b()) < 0) {
                      this.n1c_1.p19();
                    }
                    this.h9_1 = 7;
                    suspendResult = onClosedSend(this.e1c_1, this.f1c_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.v1c_1 === access$_get_RESULT_FAILED_$tBufferedChannelKt_wacckr()) {
                      this.n1c_1.p19();
                      this.h9_1 = 2;
                      continue $sm;
                    } else {
                      if (this.v1c_1 === access$_get_RESULT_SUSPEND_NO_WAITER_$tBufferedChannelKt_61h09f()) {
                        var tmp_8 = this;
                        tmp_8.w1c_1 = this.n1c_1;
                        var tmp_9 = this;
                        tmp_9.x1c_1 = this.s1c_1;
                        var tmp_10 = this;
                        tmp_10.y1c_1 = this.l1c_1;
                        var tmp_11 = this;
                        tmp_11.z1c_1 = this.p1c_1;
                        this.a1d_1 = this.w1c_1;
                        this.b1d_1 = this.x1c_1;
                        this.c1d_1 = this.y1c_1;
                        this.d1d_1 = this.z1c_1;
                        this.h9_1 = 6;
                        suspendResult = sendOnNoWaiterSuspend(this.e1c_1, this.a1d_1, this.b1d_1, this.c1d_1, this.d1d_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.h9_1 = 5;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 5:
            this.h9_1 = 2;
            continue $sm;
          case 6:
            var tmp_12 = this;
            tmp_12.j1c_1 = Unit_instance;
            this.h9_1 = 13;
            continue $sm;
          case 7:
            var tmp_13 = this;
            tmp_13.j1c_1 = Unit_instance;
            this.h9_1 = 13;
            continue $sm;
          case 8:
            var tmp_14 = this.m1c_1;
            var tmp2_safe_receiver = (!(tmp_14 == null) ? isInterface(tmp_14, Waiter) : false) ? tmp_14 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              access$prepareSenderForSuspension(this.k1c_1, tmp2_safe_receiver, this.n1c_1, this.s1c_1);
            }

            var tmp_15 = this;
            this.n1c_1;
            this.s1c_1;
            tmp_15.j1c_1 = Unit_instance;
            this.h9_1 = 13;
            continue $sm;
          case 9:
            var tmp_16 = this;
            tmp_16.j1c_1 = Unit_instance;
            this.h9_1 = 13;
            continue $sm;
          case 10:
            var tmp_17 = this;
            tmp_17.j1c_1 = Unit_instance;
            this.h9_1 = 13;
            continue $sm;
          case 11:
            throw this.k9_1;
          case 12:
            if (false) {
              this.h9_1 = 1;
              continue $sm;
            }

            this.h9_1 = 13;
            continue $sm;
          case 13:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 11) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function $receiveCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m1d_1 = _this__u8e3s4;
  }
  protoOf($receiveCOROUTINE$5).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 8;
            var tmp_0 = this;
            tmp_0.n1d_1 = this.m1d_1;
            var tmp_1 = this;
            tmp_1.o1d_1 = null;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.q1d_1 = this.n1d_1;
            this.r1d_1 = this.o1d_1;
            this.s1d_1 = this.q1d_1.y18_1.kotlinx$atomicfu$value;
            this.h9_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.h9_1 = 9;
              continue $sm;
            }

            if (this.q1d_1.w19()) {
              var tmp_2 = this;
              throw recoverStackTrace_0(_get_receiveException__foorc1(this.m1d_1));
            } else {
              this.h9_1 = 3;
              continue $sm;
            }

          case 3:
            this.t1d_1 = this.q1d_1.u18_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            var tmp0 = this.t1d_1;
            var other = get_SEGMENT_SIZE();
            tmp_3.u1d_1 = tmp0.b3(toLong(other));
            var tmp_4 = this;
            var tmp2 = this.t1d_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_4.v1d_1 = tmp2.c3(toLong(other_0)).f1();
            if (!this.s1d_1.kz_1.equals(this.u1d_1)) {
              this.w1d_1 = findSegmentReceive(this.q1d_1, this.u1d_1, this.s1d_1);
              if (this.w1d_1 == null) {
                this.h9_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                this.x1d_1 = this.w1d_1;
                this.h9_1 = 4;
                continue $sm;
              }
            } else {
              this.h9_1 = 5;
              continue $sm;
            }

          case 4:
            this.s1d_1 = this.x1d_1;
            this.h9_1 = 5;
            continue $sm;
          case 5:
            this.y1d_1 = updateCellReceive(this.q1d_1, this.s1d_1, this.v1d_1, this.t1d_1, this.r1d_1);
            if (this.y1d_1 === get_SUSPEND()) {
              var tmp_6 = this;
              var tmp_7 = this.r1d_1;
              var tmp1_safe_receiver = (!(tmp_7 == null) ? isInterface(tmp_7, Waiter) : false) ? tmp_7 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this.q1d_1, this.s1d_1, this.v1d_1);
              }
              this.s1d_1;
              this.v1d_1;
              this.t1d_1;
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (this.y1d_1 === get_FAILED()) {
                if (this.t1d_1.a1(this.q1d_1.v19()) < 0) {
                  this.s1d_1.p19();
                }
                this.h9_1 = 2;
                var tmp_8 = this;
                continue $sm;
              } else {
                if (this.y1d_1 === get_SUSPEND_NO_WAITER()) {
                  var tmp_9 = this;
                  tmp_9.a1e_1 = this.s1d_1;
                  var tmp_10 = this;
                  tmp_10.b1e_1 = this.v1d_1;
                  var tmp_11 = this;
                  tmp_11.c1e_1 = this.t1d_1;
                  this.d1e_1 = this.a1e_1;
                  this.e1e_1 = this.b1e_1;
                  this.f1e_1 = this.c1e_1;
                  this.h9_1 = 6;
                  suspendResult = receiveOnNoWaiterSuspend(this.m1d_1, this.d1e_1, this.e1e_1, this.f1e_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_12 = this;
                  this.s1d_1.p19();
                  var tmp_13 = this.y1d_1;
                  return (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
                }
              }
            }

          case 6:
            this.z1d_1 = suspendResult;
            this.h9_1 = 7;
            continue $sm;
          case 7:
            this.p1d_1 = this.z1d_1;
            this.h9_1 = 10;
            continue $sm;
          case 8:
            throw this.k9_1;
          case 9:
            if (false) {
              this.h9_1 = 1;
              continue $sm;
            }

            this.h9_1 = 10;
            continue $sm;
          case 10:
            return this.p1d_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 8) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.r18_1 = capacity;
    this.s18_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    if (!(this.r18_1 >= 0)) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.<anonymous>' call
      var message = 'Invalid channel capacity: ' + this.r18_1 + ', should be >=0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.t18_1 = atomic$long$1(new Long(0, 0));
    this.u18_1 = atomic$long$1(new Long(0, 0));
    this.v18_1 = atomic$long$1(initialBufferEnd(this.r18_1));
    this.w18_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(new Long(0, 0), null, this, 3);
    this.x18_1 = atomic$ref$1(firstSegment);
    this.y18_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.z18_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp_3;
    if (this.s18_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.onUndeliveredElementReceiveCancellationConstructor.<anonymous>' call
      tmp_3 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
    }
    tmp_2.a19_1 = tmp_3;
    this.b19_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.c19_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).v19 = function () {
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    return this.t18_1.kotlinx$atomicfu$value.k3(new Long(-1, 268435455));
  };
  protoOf(BufferedChannel).a1b = function () {
    return this.u18_1.kotlinx$atomicfu$value;
  };
  protoOf(BufferedChannel).g1e = function (element, $completion) {
    var tmp = new $sendCOROUTINE$4(this, element, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(BufferedChannel).h1e = function (element) {
    if (shouldSendSuspend0(this, this.t18_1.kotlinx$atomicfu$value))
      return Companion_getInstance_0().i1e();
    var tmp2 = get_INTERRUPTED_SEND();
    var tmp$ret$4;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = access$_get_sendSegment__111kgq(this).kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s(this).atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.k3(access$_get_SENDERS_COUNTER_MASK_$tBufferedChannelKt_6ll4te());
        var closed = access$_get_isClosedForSend0__sm8f7a(this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = s.b3(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = s.c3(toLong(other_0)).f1();
        if (!segment.kz_1.equals(id)) {
          var tmp0_elvis_lhs = access$findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
              tmp$ret$4 = Companion_getInstance_0().t1b(this.z1a());
              break $l$block_5;
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var tmp1_subject = access$updateCellSend(this, segment, i, element, s, tmp2, closed);
        if (tmp1_subject === access$_get_RESULT_RENDEZVOUS_$tBufferedChannelKt_ykevfn()) {
          segment.p19();
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$4 = Companion_getInstance_0().f1b(Unit_instance);
          break $l$block_5;
        } else if (tmp1_subject === access$_get_RESULT_BUFFERED_$tBufferedChannelKt_tnykj7()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$4 = Companion_getInstance_0().f1b(Unit_instance);
          break $l$block_5;
        } else if (tmp1_subject === access$_get_RESULT_SUSPEND_$tBufferedChannelKt_vus6es()) {
          if (closed) {
            segment.f19();
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
            tmp$ret$4 = Companion_getInstance_0().t1b(this.z1a());
            break $l$block_5;
          }
          var tmp2_safe_receiver = (!(tmp2 == null) ? isInterface(tmp2, Waiter) : false) ? tmp2 : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            access$prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
          }
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          segment.f19();
          tmp$ret$4 = Companion_getInstance_0().i1e();
          break $l$block_5;
        } else if (tmp1_subject === access$_get_RESULT_CLOSED_$tBufferedChannelKt_3eqb16()) {
          if (s.a1(this.a1b()) < 0) {
            segment.p19();
          }
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$4 = Companion_getInstance_0().t1b(this.z1a());
          break $l$block_5;
        } else if (tmp1_subject === access$_get_RESULT_FAILED_$tBufferedChannelKt_wacckr()) {
          segment.p19();
          continue $l$loop_0;
        } else if (tmp1_subject === access$_get_RESULT_SUSPEND_NO_WAITER_$tBufferedChannelKt_61h09f()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(BufferedChannel).i1b = function () {
  };
  protoOf(BufferedChannel).b1b = function () {
  };
  protoOf(BufferedChannel).k1e = function ($completion) {
    var tmp = new $receiveCOROUTINE$5(this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(BufferedChannel).l1e = function () {
    var r = this.u18_1.kotlinx$atomicfu$value;
    var sendersAndCloseStatusCur = this.t18_1.kotlinx$atomicfu$value;
    if (_get_isClosedForReceive0__f7qknl(sendersAndCloseStatusCur, this)) {
      return Companion_getInstance_0().t1b(this.u19());
    }
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var s = sendersAndCloseStatusCur.k3(new Long(-1, 268435455));
    if (r.a1(s) >= 0)
      return Companion_getInstance_0().i1e();
    var tmp2 = get_INTERRUPTED_RCV();
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
      var segment = this.y18_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        if (this.w19()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          tmp$ret$2 = Companion_getInstance_0().t1b(this.u19());
          break $l$block_0;
        }
        var r_0 = this.u18_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = r_0.b3(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = r_0.c3(toLong(other_0)).f1();
        if (!segment.kz_1.equals(id)) {
          var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var updCellResult = updateCellReceive(this, segment, i, r_0, tmp2);
        var tmp_0;
        if (updCellResult === get_SUSPEND()) {
          var tmp1_safe_receiver = (!(tmp2 == null) ? isInterface(tmp2, Waiter) : false) ? tmp2 : null;
          if (tmp1_safe_receiver == null)
            null;
          else {
            prepareReceiverForSuspension(tmp1_safe_receiver, this, segment, i);
          }
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          var segm = segment;
          this.e19(r_0);
          segm.f19();
          tmp_0 = new ChannelResult(Companion_getInstance_0().i1e());
        } else if (updCellResult === get_FAILED()) {
          if (r_0.a1(this.v19()) < 0) {
            segment.p19();
          }
          continue $l$loop_0;
        } else if (updCellResult === get_SUSPEND_NO_WAITER()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          segment.p19();
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          var element = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
          tmp_0 = new ChannelResult(Companion_getInstance_0().f1b(element));
        }
        tmp$ret$2 = tmp_0.j1e_1;
        break $l$block_0;
      }
    }
    return tmp$ret$2;
  };
  protoOf(BufferedChannel).r1b = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.y18_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var r = this.u18_1.kotlinx$atomicfu$value;
      // Inline function 'kotlin.Long.plus' call
      var other = this.r18_1;
      var tmp2 = r.y2(toLong(other));
      // Inline function 'kotlin.math.max' call
      var b = _get_bufferEndCounter__2d4hee(this);
      var tmp$ret$1 = tmp2.a1(b) >= 0 ? tmp2 : b;
      if (globalCellIndex.a1(tmp$ret$1) < 0)
        return Unit_instance;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = r.y2(toLong(1));
      if (!this.u18_1.atomicfu$compareAndSet(r, tmp$ret$2))
        continue $l$loop_0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = get_SEGMENT_SIZE();
      var id = r.b3(toLong(other_0));
      // Inline function 'kotlin.Long.rem' call
      var other_1 = get_SEGMENT_SIZE();
      var i = r.c3(toLong(other_1)).f1();
      if (!segment.kz_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var updCellResult = updateCellReceive(this, segment, i, r, null);
      if (updCellResult === get_FAILED()) {
        if (r.a1(this.v19()) < 0) {
          segment.p19();
        }
      } else {
        segment.p19();
        var tmp1_safe_receiver = this.s18_1;
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE());
        }
        var tmp2_safe_receiver = tmp_0;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          throw tmp2_safe_receiver;
        }
      }
    }
  };
  protoOf(BufferedChannel).e19 = function (globalIndex) {
    if (_get_isRendezvousOrUnlimited__3mdufi(this))
      return Unit_instance;
    while (_get_bufferEndCounter__2d4hee(this).a1(globalIndex) <= 0) {
    }
    // Inline function 'kotlin.repeat' call
    var times = get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS();
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
        var b = _get_bufferEndCounter__2d4hee(this);
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var ebCompleted = this.w18_1.kotlinx$atomicfu$value.k3(new Long(-1, 1073741823));
        if (b.equals(ebCompleted) && b.equals(_get_bufferEndCounter__2d4hee(this)))
          return Unit_instance;
      }
       while (inductionVariable < times);
    var tmp2 = this.w18_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp2.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var tmp$ret$1 = cur.k3(new Long(-1, 1073741823));
        var upd = constructEBCompletedAndPauseFlag(tmp$ret$1, true);
        if (tmp2.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    while (true) {
      var b_0 = _get_bufferEndCounter__2d4hee(this);
      var ebCompletedAndBit = this.w18_1.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      var ebCompleted_0 = ebCompletedAndBit.k3(new Long(-1, 1073741823));
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      var pauseExpandBuffers = !ebCompletedAndBit.k3(new Long(0, 1073741824)).equals(new Long(0, 0));
      if (b_0.equals(ebCompleted_0) && b_0.equals(_get_bufferEndCounter__2d4hee(this))) {
        var tmp4 = this.w18_1;
        $l$block_0: {
          // Inline function 'kotlinx.atomicfu.update' call
          while (true) {
            var cur_0 = tmp4.kotlinx$atomicfu$value;
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
            // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
            var tmp$ret$6 = cur_0.k3(new Long(-1, 1073741823));
            var upd_0 = constructEBCompletedAndPauseFlag(tmp$ret$6, false);
            if (tmp4.atomicfu$compareAndSet(cur_0, upd_0)) {
              break $l$block_0;
            }
          }
        }
        return Unit_instance;
      }
      if (!pauseExpandBuffers) {
        this.w18_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).j = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).u19 = function () {
    var tmp = this.b19_1.kotlinx$atomicfu$value;
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).z1a = function () {
    var tmp0_elvis_lhs = this.u19();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException('Channel was closed') : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).m1e = function () {
  };
  protoOf(BufferedChannel).n1e = function (cause) {
    return this.o1e(cause, false);
  };
  protoOf(BufferedChannel).bx = function (cause) {
    this.q1e(cause);
  };
  protoOf(BufferedChannel).q1e = function (cause) {
    return this.o1e(cause == null ? CancellationException_init_$Create$('Channel was cancelled') : cause, true);
  };
  protoOf(BufferedChannel).o1e = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this.b19_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    // Inline function 'kotlin.also' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.closeOrCancelImpl.<anonymous>' call
    this.m1e();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    return closedByThisOperation;
  };
  protoOf(BufferedChannel).s1b = function () {
    return false;
  };
  protoOf(BufferedChannel).q1b = function () {
    return _get_isClosedForSend0__kxgf9m(this.t18_1.kotlinx$atomicfu$value, this);
  };
  protoOf(BufferedChannel).w19 = function () {
    return _get_isClosedForReceive0__f7qknl(this.t18_1.kotlinx$atomicfu$value, this);
  };
  protoOf(BufferedChannel).u1b = function () {
    $l$loop: while (true) {
      var segment = this.y18_1.kotlinx$atomicfu$value;
      var r = this.a1b();
      var s = this.v19();
      if (s.a1(r) <= 0)
        return false;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = r.b3(toLong(other));
      if (!segment.kz_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (this.y18_1.kotlinx$atomicfu$value.kz_1.a1(id) < 0) {
            return false;
          } else {
            continue $l$loop;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.p19();
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = r.c3(toLong(other_0)).f1();
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = r.y2(toLong(1));
      this.u18_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp0_subject = this.t18_1.kotlinx$atomicfu$value.i3(60).f1();
    if (tmp0_subject === 2) {
      sb.o8('closed,');
    } else if (tmp0_subject === 3) {
      sb.o8('cancelled,');
    }
    sb.o8('capacity=' + this.r18_1 + ',');
    sb.o8('data=[');
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = listOf([this.y18_1.kotlinx$atomicfu$value, this.x18_1.kotlinx$atomicfu$value, this.z18_1.kotlinx$atomicfu$value]);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
      if (!(element === get_NULL_SEGMENT())) {
        destination.e(element);
      }
    }
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      var iterator = destination.j();
      if (!iterator.k())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.l();
      if (!iterator.k()) {
        tmp$ret$4 = minElem;
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
      var minValue = minElem.kz_1;
      do {
        var e = iterator.l();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
        var v = e.kz_1;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.k());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.a1b();
    var s = this.v19();
    var segment = firstSegment;
    append_elements: while (true) {
      var inductionVariable = 0;
      var last_0 = get_SEGMENT_SIZE();
      if (inductionVariable < last_0)
        process_cell: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp5 = segment.kz_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var globalCellIndex = tmp5.a3(toLong(other)).y2(toLong(i));
          if (globalCellIndex.a1(s) >= 0 && globalCellIndex.a1(r) >= 0)
            break append_elements;
          var cellState = segment.n18(i);
          var element_0 = segment.k18(i);
          var tmp;
          if (!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) {
            tmp = globalCellIndex.a1(r) < 0 && globalCellIndex.a1(s) >= 0 ? 'receive' : globalCellIndex.a1(s) < 0 && globalCellIndex.a1(r) >= 0 ? 'send' : 'cont';
          } else {
            if (!(cellState == null) ? isInterface(cellState, SelectInstance) : false) {
              tmp = globalCellIndex.a1(r) < 0 && globalCellIndex.a1(s) >= 0 ? 'onReceive' : globalCellIndex.a1(s) < 0 && globalCellIndex.a1(r) >= 0 ? 'onSend' : 'select';
            } else {
              if (cellState instanceof ReceiveCatching) {
                tmp = 'receiveCatching';
              } else {
                if (cellState instanceof SendBroadcast) {
                  tmp = 'sendBroadcast';
                } else {
                  if (cellState instanceof WaiterEB) {
                    tmp = 'EB(' + toString_0(cellState) + ')';
                  } else {
                    if (equals(cellState, get_RESUMING_BY_RCV()) ? true : equals(cellState, get_RESUMING_BY_EB())) {
                      tmp = 'resuming_sender';
                    } else {
                      if ((((((cellState == null ? true : equals(cellState, get_IN_BUFFER())) ? true : equals(cellState, get_DONE_RCV())) ? true : equals(cellState, get_POISONED())) ? true : equals(cellState, get_INTERRUPTED_RCV())) ? true : equals(cellState, get_INTERRUPTED_SEND())) ? true : equals(cellState, get_CHANNEL_CLOSED())) {
                        continue process_cell;
                      } else {
                        tmp = toString(cellState);
                      }
                    }
                  }
                }
              }
            }
          }
          var cellStateString = tmp;
          if (!(element_0 == null)) {
            sb.o8('(' + cellStateString + ',' + toString_0(element_0) + '),');
          } else {
            sb.o8(cellStateString + ',');
          }
        }
         while (inductionVariable < last_0);
      var tmp3_elvis_lhs = segment.l19();
      var tmp_0;
      if (tmp3_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp3_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (last(sb) === _Char___init__impl__6a9atx(44)) {
      sb.ic(sb.a() - 1 | 0);
    }
    sb.o8(']');
    return sb.toString();
  };
  function WaiterEB(waiter) {
    this.c1b_1 = waiter;
  }
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + toString(this.c1b_1) + ')';
  };
  function initialBufferEnd(capacity) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    switch (capacity) {
      case 0:
        return new Long(0, 0);
      case 2147483647:
        return new Long(-1, 2147483647);
      default:
        return toLong(capacity);
    }
  }
  function ReceiveCatching() {
  }
  function tryResume0(_this__u8e3s4, value, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_BufferedChannel_kt__d6uc4y();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.channels.tryResume0.<anonymous>' call
    var token = _this__u8e3s4.hy(value, null, onCancellation);
    var tmp;
    if (!(token == null)) {
      _this__u8e3s4.iy(token);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function constructEBCompletedAndPauseFlag(counter, pauseEB) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return (pauseEB ? new Long(0, 1073741824) : new Long(0, 0)).y2(counter);
  }
  function constructSendersAndCloseStatus(counter, closeStatus) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return toLong(closeStatus).h3(60).y2(counter);
  }
  function createSegmentFunction() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return createSegment$ref();
  }
  function createSegment(id, prev) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return new ChannelSegment(id, prev, prev.h18(), 0);
  }
  function access$_get_RESULT_RENDEZVOUS_$tBufferedChannelKt_ykevfn() {
    return 0;
  }
  function access$_get_RESULT_BUFFERED_$tBufferedChannelKt_tnykj7() {
    return 1;
  }
  function access$_get_RESULT_SUSPEND_$tBufferedChannelKt_vus6es() {
    return 2;
  }
  function access$_get_RESULT_CLOSED_$tBufferedChannelKt_3eqb16() {
    return 4;
  }
  function access$_get_RESULT_FAILED_$tBufferedChannelKt_wacckr() {
    return 5;
  }
  function access$_get_RESULT_SUSPEND_NO_WAITER_$tBufferedChannelKt_61h09f() {
    return 3;
  }
  function access$_get_SENDERS_COUNTER_MASK_$tBufferedChannelKt_6ll4te() {
    return new Long(-1, 268435455);
  }
  function createSegment$ref() {
    var l = function (p0, p1) {
      return createSegment(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  var properties_initialized_BufferedChannel_kt_58tjvw;
  function _init_properties_BufferedChannel_kt__d6uc4y() {
    if (!properties_initialized_BufferedChannel_kt_58tjvw) {
      properties_initialized_BufferedChannel_kt_58tjvw = true;
      NULL_SEGMENT = new ChannelSegment(new Long(-1, -1), null, null, 0);
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.bufferedChannel.segmentSize', 32);
      EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS = systemProp('kotlinx.coroutines.bufferedChannel.expandBufferCompletionWaitIterations', 10000);
      BUFFERED = new Symbol('BUFFERED');
      IN_BUFFER = new Symbol('SHOULD_BUFFER');
      RESUMING_BY_RCV = new Symbol('S_RESUMING_BY_RCV');
      RESUMING_BY_EB = new Symbol('RESUMING_BY_EB');
      POISONED = new Symbol('POISONED');
      DONE_RCV = new Symbol('DONE_RCV');
      INTERRUPTED_SEND = new Symbol('INTERRUPTED_SEND');
      INTERRUPTED_RCV = new Symbol('INTERRUPTED_RCV');
      CHANNEL_CLOSED = new Symbol('CHANNEL_CLOSED');
      SUSPEND = new Symbol('SUSPEND');
      SUSPEND_NO_WAITER = new Symbol('SUSPEND_NO_WAITER');
      FAILED = new Symbol('FAILED');
      NO_RECEIVE_RESULT = new Symbol('NO_RECEIVE_RESULT');
      CLOSE_HANDLER_CLOSED = new Symbol('CLOSE_HANDLER_CLOSED');
      CLOSE_HANDLER_INVOKED = new Symbol('CLOSE_HANDLER_INVOKED');
      NO_CLOSE_CAUSE = new Symbol('NO_CLOSE_CAUSE');
    }
  }
  function Factory() {
    Factory_instance = this;
    this.r1e_1 = 2147483647;
    this.s1e_1 = 0;
    this.t1e_1 = -1;
    this.u1e_1 = -2;
    this.v1e_1 = -3;
    this.w1e_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.x1e_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw($this);
      tmp = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y1e_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.y1e_1 = cause;
  }
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.y1e_1, other.y1e_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.y1e_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + toString_0(this.y1e_1) + ')';
  };
  function Companion() {
    Companion_instance_0 = this;
    this.e1b_1 = new Failed();
  }
  protoOf(Companion).f1b = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).i1e = function () {
    return _ChannelResult___init__impl__siwsuf(this.e1b_1);
  };
  protoOf(Companion).t1b = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed(cause));
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp;
    if (_ChannelResult___get_holder__impl__pm9gzw($this) instanceof Closed) {
      tmp = toString(_ChannelResult___get_holder__impl__pm9gzw($this));
    } else {
      tmp = 'Value(' + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.j1e_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_0();
    this.j1e_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.j1e_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.j1e_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.j1e_1, other);
  };
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function SendChannel() {
  }
  function ReceiveChannel() {
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp;
    switch (capacity) {
      case 0:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(0, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      case -1:
        // Inline function 'kotlin.require' call

        if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }

        tmp = new ConflatedBufferedChannel(1, BufferOverflow_DROP_OLDEST_getInstance(), onUndeliveredElement);
        break;
      case 2147483647:
        tmp = new BufferedChannel(2147483647, onUndeliveredElement);
        break;
      case -2:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().x1e_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      default:
        tmp = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.d1f_1 = _channel;
  }
  protoOf(ChannelCoroutine).n1e = function (cause) {
    return this.d1f_1.n1e(cause);
  };
  protoOf(ChannelCoroutine).j = function () {
    return this.d1f_1.j();
  };
  protoOf(ChannelCoroutine).k1e = function ($completion) {
    return this.d1f_1.k1e($completion);
  };
  protoOf(ChannelCoroutine).g1e = function (element, $completion) {
    return this.d1f_1.g1e(element, $completion);
  };
  protoOf(ChannelCoroutine).l1e = function () {
    return this.d1f_1.l1e();
  };
  protoOf(ChannelCoroutine).h1e = function (element) {
    return this.d1f_1.h1e(element);
  };
  protoOf(ChannelCoroutine).bx = function (cause) {
    if (this.pw())
      return Unit_instance;
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.wv() : null, null, this);
    } else {
      tmp = cause;
    }
    this.dx(tmp);
  };
  protoOf(ChannelCoroutine).z1e = function (cause, $super) {
    return this.cx(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).dx = function (cause) {
    var exception = this.uw(cause);
    this.d1f_1.bx(exception);
    this.gx(exception);
  };
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp;
    if (cause == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.channels.cancelConsumed.<anonymous>' call
      var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
      tmp = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', cause) : tmp0_elvis_lhs;
    }
    _this__u8e3s4.bx(tmp);
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.r1f_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : trySendDropOldest($this, element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).h1e.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) || _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp0_safe_receiver = $this.s18_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        throw tmp1_safe_receiver;
      }
    }
    return Companion_getInstance_0().f1b(Unit_instance);
  }
  function trySendDropOldest($this, element) {
    var tmp2 = get_BUFFERED();
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = access$_get_sendSegment__111kgq($this).kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s($this).atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.k3(access$_get_SENDERS_COUNTER_MASK_$tBufferedChannelKt_6ll4te());
        var closed = access$_get_isClosedForSend0__sm8f7a($this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = s.b3(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = s.c3(toLong(other_0)).f1();
        if (!segment.kz_1.equals(id)) {
          var tmp0_elvis_lhs = access$findSegmentSend($this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              return Companion_getInstance_0().t1b($this.z1a());
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var tmp1_subject = access$updateCellSend($this, segment, i, element, s, tmp2, closed);
        if (tmp1_subject === access$_get_RESULT_RENDEZVOUS_$tBufferedChannelKt_ykevfn()) {
          segment.p19();
          return Companion_getInstance_0().f1b(Unit_instance);
        } else if (tmp1_subject === access$_get_RESULT_BUFFERED_$tBufferedChannelKt_tnykj7()) {
          return Companion_getInstance_0().f1b(Unit_instance);
        } else if (tmp1_subject === access$_get_RESULT_SUSPEND_$tBufferedChannelKt_vus6es()) {
          if (closed) {
            segment.f19();
            return Companion_getInstance_0().t1b($this.z1a());
          }
          var tmp2_safe_receiver = (!(tmp2 == null) ? isInterface(tmp2, Waiter) : false) ? tmp2 : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            access$prepareSenderForSuspension($this, tmp2_safe_receiver, segment, i);
          }
          var tmp0 = segment.kz_1;
          // Inline function 'kotlin.Long.times' call
          var other_1 = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var tmp$ret$5 = tmp0.a3(toLong(other_1)).y2(toLong(i));
          $this.r1b(tmp$ret$5);
          return Companion_getInstance_0().f1b(Unit_instance);
        } else if (tmp1_subject === access$_get_RESULT_CLOSED_$tBufferedChannelKt_3eqb16()) {
          if (s.a1($this.a1b()) < 0) {
            segment.p19();
          }
          return Companion_getInstance_0().t1b($this.z1a());
        } else if (tmp1_subject === access$_get_RESULT_FAILED_$tBufferedChannelKt_wacckr()) {
          segment.p19();
          continue $l$loop_0;
        } else if (tmp1_subject === access$_get_RESULT_SUSPEND_NO_WAITER_$tBufferedChannelKt_61h09f()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$3;
  }
  function ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    BufferedChannel.call(this, capacity, onUndeliveredElement);
    this.q1f_1 = capacity;
    this.r1f_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    if (!!(this.r1f_1 === BufferOverflow_SUSPEND_getInstance())) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.<anonymous>' call
      var message = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).xa() + ' instead';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.q1f_1 >= 1)) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.<anonymous>' call
      var message_0 = 'Buffered channel capacity must be at least 1, but ' + this.q1f_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).s1b = function () {
    return this.r1f_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).g1e = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var this_0 = trySendImpl(this, element, true);
    // Inline function 'kotlin.contracts.contract' call
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (tmp instanceof Closed) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.send.<anonymous>' call
      ChannelResult__exceptionOrNull_impl_16ei30(this_0);
      var tmp0_safe_receiver = this.s18_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, this.z1a());
        throw tmp1_safe_receiver;
      }
      throw this.z1a();
    }
    return Unit_instance;
  };
  protoOf(ConflatedBufferedChannel).h1e = function (element) {
    return trySendImpl(this, element, false);
  };
  function ProducerScope() {
  }
  function produce(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    onCompletion = onCompletion === VOID ? null : onCompletion;
    var channel = Channel(capacity, onBufferOverflow);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.vw(onCompletion);
    }
    coroutine.gw(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).tv = function () {
    return protoOf(ChannelCoroutine).tv.call(this);
  };
  protoOf(ProducerCoroutine).w1f = function (value) {
    this.d1f_1.p1e();
  };
  protoOf(ProducerCoroutine).uv = function (value) {
    return this.w1f(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).vv = function (cause, handled) {
    var processed = this.d1f_1.n1e(cause);
    if (!processed && !handled) {
      handleCoroutineException(this.rv_1, cause);
    }
  };
  protoOf(ProducerCoroutine).z1e = function (cause, $super) {
    return this.cx(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function flow(block) {
    return new SafeFlow(block);
  }
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.x1f_1 = block;
  }
  protoOf(SafeFlow).y1f = function (collector, $completion) {
    return this.x1f_1(collector, $completion);
  };
  function emitAll(_this__u8e3s4, channel, $completion) {
    return emitAllImpl(_this__u8e3s4, channel, true, $completion);
  }
  function emitAllImpl(_this__u8e3s4, channel, consume, $completion) {
    var tmp = new $emitAllImplCOROUTINE$11(_this__u8e3s4, channel, consume, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function receiveAsFlow(_this__u8e3s4) {
    return new ChannelAsFlow(_this__u8e3s4, false);
  }
  function markConsumed($this) {
    if ($this.t1g_1) {
      // Inline function 'kotlin.check' call
      if (!!$this.u1g_1.atomicfu$getAndSet(true)) {
        // Inline function 'kotlinx.coroutines.flow.ChannelAsFlow.markConsumed.<anonymous>' call
        var message = 'ReceiveChannel.consumeAsFlow can be collected just once';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function $collectCOROUTINE$12(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d1h_1 = _this__u8e3s4;
    this.e1h_1 = collector;
  }
  protoOf($collectCOROUTINE$12).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            if (this.d1h_1.g1h_1 === -3) {
              markConsumed(this.d1h_1);
              this.h9_1 = 2;
              suspendResult = emitAllImpl(this.e1h_1, this.d1h_1.s1g_1, this.d1h_1.t1g_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 1;
              suspendResult = protoOf(ChannelFlow).z1f.call(this.d1h_1, this.e1h_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.h9_1 = 3;
            continue $sm;
          case 2:
            this.h9_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 4) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function ChannelAsFlow(channel, consume, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -3 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.s1g_1 = channel;
    this.t1g_1 = consume;
    this.u1g_1 = atomic$boolean$1(false);
  }
  protoOf(ChannelAsFlow).i1h = function (scope, $completion) {
    return emitAllImpl(new SendingCollector(scope), this.s1g_1, this.t1g_1, $completion);
  };
  protoOf(ChannelAsFlow).j1h = function (scope) {
    markConsumed(this);
    var tmp;
    if (this.g1h_1 === -3) {
      tmp = this.s1g_1;
    } else {
      tmp = protoOf(ChannelFlow).j1h.call(this, scope);
    }
    return tmp;
  };
  protoOf(ChannelAsFlow).z1f = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$12(this, collector, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ChannelAsFlow).k1h = function () {
    return 'channel=' + toString(this.s1g_1);
  };
  function $emitAllImplCOROUTINE$11(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i1g_1 = _this__u8e3s4;
    this.j1g_1 = channel;
    this.k1g_1 = consume;
  }
  protoOf($emitAllImplCOROUTINE$11).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 9;
            ensureActive_1(this.i1g_1);
            this.l1g_1 = null;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.i9_1 = 7;
            this.i9_1 = 6;
            this.n1g_1 = this.j1g_1.j();
            this.h9_1 = 2;
            continue $sm;
          case 2:
            this.h9_1 = 3;
            suspendResult = this.n1g_1.o1b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            if (!suspendResult) {
              this.h9_1 = 5;
              continue $sm;
            }

            this.o1g_1 = this.n1g_1.l();
            this.h9_1 = 4;
            suspendResult = this.i1g_1.n1h(this.o1g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.h9_1 = 2;
            continue $sm;
          case 5:
            this.m1g_1 = Unit_instance;
            this.i9_1 = 9;
            this.h9_1 = 8;
            continue $sm;
          case 6:
            this.i9_1 = 7;
            var tmp_0 = this.k9_1;
            if (tmp_0 instanceof Error) {
              var e = this.k9_1;
              var tmp_1 = this;
              this.l1g_1 = e;
              throw e;
            } else {
              throw this.k9_1;
            }

          case 7:
            this.i9_1 = 9;
            var t = this.k9_1;
            if (this.k1g_1) {
              cancelConsumed(this.j1g_1, this.l1g_1);
            }

            throw t;
          case 8:
            this.i9_1 = 9;
            if (this.k1g_1) {
              cancelConsumed(this.j1g_1, this.l1g_1);
            }

            return Unit_instance;
          case 9:
            throw this.k9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i9_1 === 9) {
          throw e_0;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e_0;
        }
      }
     while (true);
  };
  function $collectCOROUTINE$13(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w1h_1 = _this__u8e3s4;
    this.x1h_1 = collector;
  }
  protoOf($collectCOROUTINE$13).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 5;
            var tmp_0 = this;
            tmp_0.y1h_1 = new SafeCollector(this.x1h_1, this.n9());
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.i9_1 = 4;
            this.h9_1 = 2;
            suspendResult = this.w1h_1.y1f(this.y1h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.z1h_1 = suspendResult;
            this.i9_1 = 5;
            this.h9_1 = 3;
            continue $sm;
          case 3:
            this.i9_1 = 5;
            this.y1h_1.r9();
            return Unit_instance;
          case 4:
            this.i9_1 = 5;
            var t = this.k9_1;
            this.y1h_1.r9();
            throw t;
          case 5:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 5) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function AbstractFlow() {
  }
  protoOf(AbstractFlow).z1f = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$13(this, collector, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  function FlowCollector() {
  }
  function get_NO_VALUE() {
    _init_properties_SharedFlow_kt__umasnn();
    return NO_VALUE;
  }
  var NO_VALUE;
  function MutableSharedFlow(replay, extraBufferCapacity, onBufferOverflow) {
    replay = replay === VOID ? 0 : replay;
    extraBufferCapacity = extraBufferCapacity === VOID ? 0 : extraBufferCapacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    _init_properties_SharedFlow_kt__umasnn();
    // Inline function 'kotlin.require' call
    if (!(replay >= 0)) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message = 'replay cannot be negative, but was ' + replay;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(extraBufferCapacity >= 0)) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message_0 = 'extraBufferCapacity cannot be negative, but was ' + extraBufferCapacity;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(replay > 0 || extraBufferCapacity > 0 || onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()))) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message_1 = 'replay or extraBufferCapacity must be positive with non-default onBufferOverflow strategy ' + onBufferOverflow.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var bufferCapacity0 = replay + extraBufferCapacity | 0;
    var bufferCapacity = bufferCapacity0 < 0 ? 2147483647 : bufferCapacity0;
    return new SharedFlowImpl(replay, bufferCapacity, onBufferOverflow);
  }
  function _get_head__d7jo8b($this) {
    var tmp0 = $this.n1i_1;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = $this.m1i_1;
    return tmp0.a1(b) <= 0 ? tmp0 : b;
  }
  function _get_replaySize__dxgnb1($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.o1i_1;
    return tmp0.y2(toLong(other)).z2($this.m1i_1).f1();
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.o1i_1 + $this.p1i_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.o1i_1;
    return tmp0.y2(toLong(other));
  }
  function _get_queueEndIndex__4m025l($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.o1i_1;
    var tmp2 = tmp0.y2(toLong(other));
    // Inline function 'kotlin.Long.plus' call
    var other_0 = $this.p1i_1;
    return tmp2.y2(toLong(other_0));
  }
  function tryEmitLocked($this, value) {
    if ($this.r1i_1 === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.o1i_1 >= $this.j1i_1 && $this.n1i_1.a1($this.m1i_1) <= 0) {
      switch ($this.k1i_1.s2_1) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
      }
    }
    enqueueLocked($this, value);
    $this.o1i_1 = $this.o1i_1 + 1 | 0;
    if ($this.o1i_1 > $this.j1i_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.i1i_1) {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0 = $this.m1i_1.y2(toLong(1));
      updateBufferLocked($this, tmp$ret$0, $this.n1i_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.i1i_1 === 0)
      return true;
    enqueueLocked($this, value);
    $this.o1i_1 = $this.o1i_1 + 1 | 0;
    if ($this.o1i_1 > $this.i1i_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.o1i_1;
    tmp.n1i_1 = tmp0.y2(toLong(other));
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.l1i_1), _get_head__d7jo8b($this), null);
    $this.o1i_1 = $this.o1i_1 - 1 | 0;
    // Inline function 'kotlin.Long.plus' call
    var newHead = _get_head__d7jo8b($this).y2(toLong(1));
    if ($this.m1i_1.a1(newHead) < 0)
      $this.m1i_1 = newHead;
    if ($this.n1i_1.a1(newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.r1i_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.q1i_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.correctCollectorIndexesOnDropOldest.<anonymous>' call
            if (element.u1i_1.a1(new Long(0, 0)) >= 0 && element.u1i_1.a1(newHead) < 0) {
              element.u1i_1 = newHead;
            }
          }
        }
      }
    }
    $this.n1i_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.l1i_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0 = _get_head__d7jo8b($this).y2(toLong(curSize));
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    // Inline function 'kotlin.check' call
    if (!(newSize > 0)) {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
      var message = 'Buffer size overflow';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.also' call
    var this_0 = fillArrayVal(Array(newSize), null);
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
    $this.l1i_1 = this_0;
    var newBuffer = this_0;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.Long.plus' call
        var tmp = head.y2(toLong(i));
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$4 = head.y2(toLong(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$4));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.d10();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>' call
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>' call
      if (tryEmitLocked($this, value)) {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.s9(tmp$ret$0);
        resumes = findSlotsToResumeLocked($this, resumes);
        tmp$ret$2 = null;
        break $l$block;
      }
      var tmp2 = _get_head__d7jo8b($this);
      // Inline function 'kotlin.Long.plus' call
      var other = _get_totalSize__xhdb3o($this);
      var tmp$ret$3 = tmp2.y2(toLong(other));
      // Inline function 'kotlin.also' call
      var this_0 = new Emitter($this, tmp$ret$3, value, cancellable);
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>.<anonymous>' call
      enqueueLocked($this, this_0);
      $this.p1i_1 = $this.p1i_1 + 1 | 0;
      if ($this.j1i_1 === 0)
        resumes = findSlotsToResumeLocked($this, resumes);
      tmp$ret$2 = this_0;
    }
    var emitter = tmp$ret$2;
    if (emitter == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>' call
      disposeOnCancellation(cancellable, emitter);
    }
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var r = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (r == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_instance);
        r.s9(tmp$ret$8);
      }
    }
    return cancellable.vx();
  }
  function cancelEmitter($this, emitter) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (emitter.x1i_1.a1(_get_head__d7jo8b($this)) < 0)
      return Unit_instance;
    var buffer = ensureNotNull($this.l1i_1);
    if (!(getBufferAt(buffer, emitter.x1i_1) === emitter))
      return Unit_instance;
    setBufferAt(buffer, emitter.x1i_1, get_NO_VALUE());
    cleanupTailLocked($this);
    return Unit_instance;
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    // Inline function 'kotlin.comparisons.minOf' call
    var newHead = newMinCollectorIndex.a1(newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b($this);
    if (inductionVariable.a1(newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable.y2(new Long(1, 0));
        setBufferAt(ensureNotNull($this.l1i_1), index, null);
      }
       while (inductionVariable.a1(newHead) < 0);
    $this.m1i_1 = newReplayIndex;
    $this.n1i_1 = newMinCollectorIndex;
    $this.o1i_1 = newBufferEndIndex.z2(newHead).f1();
    $this.p1i_1 = newQueueEndIndex.z2(newBufferEndIndex).f1();
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function cleanupTailLocked($this) {
    if ($this.j1i_1 === 0 && $this.p1i_1 <= 1)
      return Unit_instance;
    var buffer = ensureNotNull($this.l1i_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.p1i_1 > 0) {
        var tmp0 = _get_head__d7jo8b($this);
        // Inline function 'kotlin.Long.plus' call
        var other = _get_totalSize__xhdb3o($this);
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$1 = tmp0.y2(toLong(other)).z2(toLong(1));
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      $this.p1i_1 = $this.p1i_1 - 1 | 0;
      var tmp4 = _get_head__d7jo8b($this);
      // Inline function 'kotlin.Long.plus' call
      var other_0 = _get_totalSize__xhdb3o($this);
      var tmp$ret$2 = tmp4.y2(toLong(other_0));
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryTakeValue.<anonymous>' call
    var index = tryPeekLocked($this, slot);
    var tmp;
    if (index.a1(new Long(0, 0)) < 0) {
      tmp = get_NO_VALUE();
    } else {
      var oldIndex = slot.u1i_1;
      var newValue = getPeekedValueLockedAt($this, index);
      var tmp_0 = slot;
      // Inline function 'kotlin.Long.plus' call
      tmp_0.u1i_1 = index.y2(toLong(1));
      resumes = $this.a1j(oldIndex);
      tmp = newValue;
    }
    var value = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var resume = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (resume == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        resume.s9(tmp$ret$4);
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.u1i_1;
    if (index.a1(_get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.j1i_1 > 0)
      return new Long(-1, -1);
    if (index.a1(_get_head__d7jo8b($this)) > 0)
      return new Long(-1, -1);
    if ($this.p1i_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.l1i_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.y1i_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.d10();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>' call
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>.<anonymous>' call
      var index = tryPeekLocked($this, slot);
      if (index.a1(new Long(0, 0)) < 0) {
        slot.v1i_1 = cancellable;
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.s9(tmp$ret$0);
        break $l$block;
      }
      slot.v1i_1 = cancellable;
    }
    return cancellable.vx();
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.r1i_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.q1i_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            $l$block_1: {
              // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.findSlotsToResumeLocked.<anonymous>' call
              var tmp0_elvis_lhs = element.v1i_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (tryPeekLocked($this, element).a1(new Long(0, 0)) < 0) {
                break $l$block_1;
              }
              if (resumeCount >= resumes.length) {
                var tmp_0 = resumes;
                // Inline function 'kotlin.comparisons.maxOf' call
                var b = imul(2, resumes.length);
                var tmp$ret$2 = Math.max(2, b);
                resumes = copyOf(tmp_0, tmp$ret$2);
              }
              var tmp_1 = resumes;
              var tmp1 = resumeCount;
              resumeCount = tmp1 + 1 | 0;
              tmp_1[tmp1] = cont;
              element.v1i_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.w1i_1 = flow;
    this.x1i_1 = index;
    this.y1i_1 = value;
    this.z1i_1 = cont;
  }
  protoOf(Emitter).qy = function () {
    return cancelEmitter(this.w1i_1, this);
  };
  function $collectCOROUTINE$14(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j1j_1 = _this__u8e3s4;
    this.k1j_1 = collector;
  }
  protoOf($collectCOROUTINE$14).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 13;
            this.l1j_1 = this.j1j_1.p1j();
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.i9_1 = 12;
            var tmp_0 = this.k1j_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.h9_1 = 2;
              suspendResult = this.k1j_1.s1j(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 3;
              continue $sm;
            }

          case 2:
            this.h9_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.n1j_1 = this.n9().u9(Key_instance_2);
            this.h9_1 = 4;
            continue $sm;
          case 4:
            if (!true) {
              this.h9_1 = 10;
              continue $sm;
            }

            this.h9_1 = 5;
            continue $sm;
          case 5:
            if (!true) {
              this.h9_1 = 8;
              continue $sm;
            }

            this.o1j_1 = tryTakeValue(this.j1j_1, this.l1j_1);
            if (!(this.o1j_1 === get_NO_VALUE())) {
              this.h9_1 = 8;
              continue $sm;
            } else {
              this.h9_1 = 6;
              continue $sm;
            }

          case 6:
            this.h9_1 = 7;
            suspendResult = awaitValue(this.j1j_1, this.l1j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.h9_1 = 5;
            continue $sm;
          case 8:
            var tmp0_safe_receiver = this.n1j_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            this.h9_1 = 9;
            var tmp_2 = this.o1j_1;
            suspendResult = this.k1j_1.n1h((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.h9_1 = 4;
            continue $sm;
          case 10:
            this.m1j_1 = Unit_instance;
            this.i9_1 = 13;
            this.h9_1 = 11;
            continue $sm;
          case 11:
            this.i9_1 = 13;
            this.j1j_1.t1j(this.l1j_1);
            return Unit_instance;
          case 12:
            this.i9_1 = 13;
            var t = this.k9_1;
            this.j1j_1.t1j(this.l1j_1);
            throw t;
          case 13:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 13) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.i1i_1 = replay;
    this.j1i_1 = bufferCapacity;
    this.k1i_1 = onBufferOverflow;
    this.l1i_1 = null;
    this.m1i_1 = new Long(0, 0);
    this.n1i_1 = new Long(0, 0);
    this.o1i_1 = 0;
    this.p1i_1 = 0;
  }
  protoOf(SharedFlowImpl).u1j = function () {
    var tmp = ensureNotNull(this.l1i_1);
    var tmp0 = this.m1i_1;
    // Inline function 'kotlin.Long.plus' call
    var other = _get_replaySize__dxgnb1(this);
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$1 = tmp0.y2(toLong(other)).z2(toLong(1));
    var tmp_0 = getBufferAt(tmp, tmp$ret$1);
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(SharedFlowImpl).v1j = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$14(this, collector, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(SharedFlowImpl).z1f = function (collector, $completion) {
    return this.v1j(collector, $completion);
  };
  protoOf(SharedFlowImpl).w1j = function (value) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryEmit.<anonymous>' call
    var tmp;
    if (tryEmitLocked(this, value)) {
      resumes = findSlotsToResumeLocked(this, resumes);
      tmp = true;
    } else {
      tmp = false;
    }
    var emitted = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        cont.s9(tmp$ret$3);
      }
    }
    return emitted;
  };
  protoOf(SharedFlowImpl).n1h = function (value, $completion) {
    if (this.w1j(value))
      return Unit_instance;
    return emitSuspend(this, value, $completion);
  };
  protoOf(SharedFlowImpl).x1j = function () {
    var index = this.m1i_1;
    if (index.a1(this.n1i_1) < 0)
      this.n1i_1 = index;
    return index;
  };
  protoOf(SharedFlowImpl).a1j = function (oldIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (oldIndex.a1(this.n1i_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b(this);
    // Inline function 'kotlin.Long.plus' call
    var other = this.o1i_1;
    var newMinCollectorIndex = head.y2(toLong(other));
    if (this.j1i_1 === 0 && this.p1i_1 > 0) {
      newMinCollectorIndex = newMinCollectorIndex.d3();
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if (this.r1i_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = this.q1i_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.updateCollectorIndexLocked.<anonymous>' call
            if (element.u1i_1.a1(new Long(0, 0)) >= 0 && element.u1i_1.a1(newMinCollectorIndex) < 0)
              newMinCollectorIndex = element.u1i_1;
          }
        }
      }
    }
    // Inline function 'kotlinx.coroutines.assert' call
    if (newMinCollectorIndex.a1(this.n1i_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.r1i_1 > 0) {
      var newBufferSize0 = newBufferEndIndex.z2(newMinCollectorIndex).f1();
      var tmp4 = this.p1i_1;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = this.j1i_1 - newBufferSize0 | 0;
      tmp = Math.min(tmp4, b);
    } else {
      tmp = this.p1i_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    var tmp6 = newBufferEndIndex;
    // Inline function 'kotlin.Long.plus' call
    var other_0 = this.p1i_1;
    var newQueueEndIndex = tmp6.y2(toLong(other_0));
    if (maxResumeCount > 0) {
      // Inline function 'kotlin.arrayOfNulls' call
      resumes = fillArrayVal(Array(maxResumeCount), null);
      var resumeCount = 0;
      var buffer = ensureNotNull(this.l1i_1);
      var inductionVariable_0 = newBufferEndIndex;
      if (inductionVariable_0.a1(newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0.y2(new Long(1, 0));
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (!(emitter instanceof Emitter))
              THROW_CCE();
            var tmp_0 = resumes;
            var tmp2 = resumeCount;
            resumeCount = tmp2 + 1 | 0;
            tmp_0[tmp2] = emitter.z1i_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.y1i_1);
            newBufferEndIndex = newBufferEndIndex.d3();
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (inductionVariable_0.a1(newQueueEndIndex) < 0);
    }
    var newBufferSize1 = newBufferEndIndex.z2(head).f1();
    if (this.r1i_1 === 0)
      newMinCollectorIndex = newBufferEndIndex;
    var tmp13 = this.m1i_1;
    var tmp11 = newBufferEndIndex;
    // Inline function 'kotlin.comparisons.minOf' call
    var a = this.i1i_1;
    // Inline function 'kotlin.Long.minus' call
    var other_1 = Math.min(a, newBufferSize1);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_0 = tmp11.z2(toLong(other_1));
    var newReplayIndex = tmp13.a1(b_0) >= 0 ? tmp13 : b_0;
    if (this.j1i_1 === 0 && newReplayIndex.a1(newQueueEndIndex) < 0 && equals(getBufferAt(ensureNotNull(this.l1i_1), newReplayIndex), get_NO_VALUE())) {
      newBufferEndIndex = newBufferEndIndex.d3();
      newReplayIndex = newReplayIndex.d3();
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(resumes.length === 0))
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  protoOf(SharedFlowImpl).y1j = function () {
    return new SharedFlowSlot();
  };
  protoOf(SharedFlowImpl).z1j = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  };
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.u1i_1 = new Long(-1, -1);
    this.v1i_1 = null;
  }
  protoOf(SharedFlowSlot).a1k = function (flow) {
    if (this.u1i_1.a1(new Long(0, 0)) >= 0)
      return false;
    this.u1i_1 = flow.x1j();
    return true;
  };
  protoOf(SharedFlowSlot).b1k = function (flow) {
    return this.a1k(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  protoOf(SharedFlowSlot).c1k = function (flow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var oldIndex = this.u1i_1;
    this.u1i_1 = new Long(-1, -1);
    this.v1i_1 = null;
    return flow.a1j(oldIndex);
  };
  protoOf(SharedFlowSlot).d1k = function (flow) {
    return this.c1k(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  function getBufferAt(_this__u8e3s4, index) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.f1() & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.f1() & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function _init_properties_SharedFlow_kt__umasnn() {
    if (!properties_initialized_SharedFlow_kt_tmefor) {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function updateState($this, expectedState, newState) {
    var curSequence;
    var curSlots;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var oldState = $this.i1k_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) && !equals(oldState, expectedState))
      return false;
    if (equals(oldState, newState))
      return true;
    $this.i1k_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.j1k_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.j1k_1 = curSequence;
    } else {
      $this.j1k_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.q1i_1;
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          if (element == null)
            null;
          else {
            element.l1k();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      if ($this.j1k_1 === curSequence) {
        $this.j1k_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.j1k_1;
      curSlots = $this.q1i_1;
    }
  }
  function $collectCOROUTINE$15(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u1k_1 = _this__u8e3s4;
    this.v1k_1 = collector;
  }
  protoOf($collectCOROUTINE$15).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 12;
            this.w1k_1 = this.u1k_1.p1j();
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.i9_1 = 11;
            var tmp_0 = this.v1k_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.h9_1 = 2;
              suspendResult = this.v1k_1.s1j(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 3;
              continue $sm;
            }

          case 2:
            this.h9_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.y1k_1 = this.n9().u9(Key_instance_2);
            this.z1k_1 = null;
            this.h9_1 = 4;
            continue $sm;
          case 4:
            if (!true) {
              this.h9_1 = 9;
              continue $sm;
            }

            this.a1l_1 = this.u1k_1.i1k_1.kotlinx$atomicfu$value;
            var tmp0_safe_receiver = this.y1k_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            if (this.z1k_1 == null || !equals(this.z1k_1, this.a1l_1)) {
              this.h9_1 = 5;
              var tmp0 = get_NULL();
              var value = this.a1l_1;
              var tmp_2;
              if (value === tmp0) {
                tmp_2 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
              } else {
                tmp_2 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
              }
              suspendResult = this.v1k_1.n1h(tmp_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 6;
              continue $sm;
            }

          case 5:
            this.z1k_1 = this.a1l_1;
            this.h9_1 = 6;
            continue $sm;
          case 6:
            if (!this.w1k_1.c1l()) {
              this.h9_1 = 7;
              suspendResult = this.w1k_1.b1l(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 8;
              continue $sm;
            }

          case 7:
            this.h9_1 = 8;
            continue $sm;
          case 8:
            this.h9_1 = 4;
            continue $sm;
          case 9:
            this.x1k_1 = Unit_instance;
            this.i9_1 = 12;
            this.h9_1 = 10;
            continue $sm;
          case 10:
            this.i9_1 = 12;
            this.u1k_1.t1j(this.w1k_1);
            return Unit_instance;
          case 11:
            this.i9_1 = 12;
            var t = this.k9_1;
            this.u1k_1.t1j(this.w1k_1);
            throw t;
          case 12:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 12) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.i1k_1 = atomic$ref$1(initialState);
    this.j1k_1 = 0;
  }
  protoOf(StateFlowImpl).d1l = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).v = function () {
    var tmp0 = get_NULL();
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var value = this.i1k_1.kotlinx$atomicfu$value;
    var tmp;
    if (value === tmp0) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return tmp;
  };
  protoOf(StateFlowImpl).e1l = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  protoOf(StateFlowImpl).w1j = function (value) {
    this.d1l(value);
    return true;
  };
  protoOf(StateFlowImpl).n1h = function (value, $completion) {
    this.d1l(value);
    return Unit_instance;
  };
  protoOf(StateFlowImpl).v1j = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$15(this, collector, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(StateFlowImpl).z1f = function (collector, $completion) {
    return this.v1j(collector, $completion);
  };
  protoOf(StateFlowImpl).y1j = function () {
    return new StateFlowSlot();
  };
  protoOf(StateFlowImpl).z1j = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  };
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.k1k_1 = atomic$ref$1(null);
  }
  protoOf(StateFlowSlot).f1l = function (flow) {
    if (!(this.k1k_1.kotlinx$atomicfu$value == null))
      return false;
    this.k1k_1.kotlinx$atomicfu$value = get_NONE();
    return true;
  };
  protoOf(StateFlowSlot).b1k = function (flow) {
    return this.f1l(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).g1l = function (flow) {
    this.k1k_1.kotlinx$atomicfu$value = null;
    return get_EMPTY_RESUMES();
  };
  protoOf(StateFlowSlot).d1k = function (flow) {
    return this.g1l(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).l1k = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.k1k_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.makePending.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state == null)
        return Unit_instance;
      else if (state === get_PENDING())
        return Unit_instance;
      else if (state === get_NONE()) {
        if (this.k1k_1.atomicfu$compareAndSet(state, get_PENDING()))
          return Unit_instance;
      } else {
        if (this.k1k_1.atomicfu$compareAndSet(state, get_NONE())) {
          // Inline function 'kotlin.coroutines.resume' call
          var this_1 = state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          // Inline function 'kotlin.Companion.success' call
          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
          this_1.s9(tmp$ret$0);
          return Unit_instance;
        }
      }
    }
  };
  protoOf(StateFlowSlot).c1l = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.assert' call
    return ensureNotNull(this.k1k_1.atomicfu$getAndSet(get_NONE())) === get_PENDING();
  };
  protoOf(StateFlowSlot).b1l = function ($completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.d10();
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.awaitPending.<anonymous>' call
      // Inline function 'kotlinx.coroutines.assert' call
      if (this.k1k_1.atomicfu$compareAndSet(get_NONE(), cancellable)) {
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_instance);
      cancellable.s9(tmp$ret$1);
    }
    return cancellable.vx();
  };
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (!properties_initialized_StateFlow_kt_nsqikx) {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    _init_properties_AbstractSharedFlow_kt__h2xygb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function AbstractSharedFlow() {
    SynchronizedObject.call(this);
    this.q1i_1 = null;
    this.r1i_1 = 0;
    this.s1i_1 = 0;
    this.t1i_1 = null;
  }
  protoOf(AbstractSharedFlow).p1j = function () {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>' call
    var curSlots = this.q1i_1;
    var tmp;
    if (curSlots == null) {
      // Inline function 'kotlin.also' call
      var this_0 = this.z1j(2);
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
      this.q1i_1 = this_0;
      tmp = this_0;
    } else {
      var tmp_0;
      if (this.r1i_1 >= curSlots.length) {
        // Inline function 'kotlin.also' call
        var this_1 = copyOf(curSlots, imul(2, curSlots.length));
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        this.q1i_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.s1i_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_2 = this.y1j();
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        slots[index] = this_2;
        tmp_1 = this_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      slot = tmp_1;
      index = index + 1 | 0;
      if (index >= slots.length)
        index = 0;
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).b1k(this))
        break $l$loop;
    }
    this.s1i_1 = index;
    this.r1i_1 = this.r1i_1 + 1 | 0;
    subscriptionCount = this.t1i_1;
    var slot_0 = slot;
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.t1l(1);
    return slot_0;
  };
  protoOf(AbstractSharedFlow).t1j = function (slot) {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.freeSlot.<anonymous>' call
    this.r1i_1 = this.r1i_1 - 1 | 0;
    subscriptionCount = this.t1i_1;
    if (this.r1i_1 === 0)
      this.s1i_1 = 0;
    var resumes = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).d1k(this);
    var inductionVariable = 0;
    var last = resumes.length;
    while (inductionVariable < last) {
      var cont = resumes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        cont.s9(tmp$ret$3);
      }
    }
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.t1l(-1);
  };
  function AbstractSharedFlowSlot() {
  }
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function _init_properties_AbstractSharedFlow_kt__h2xygb() {
    if (!properties_initialized_AbstractSharedFlow_kt_2mpafr) {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_RESUMES = fillArrayVal(Array(0), null);
    }
  }
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation) {
    this.c1m_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).e1m = function (it, $completion) {
    var tmp = this.f1m(it, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).ba = function (p1, $completion) {
    return this.e1m((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.c1m_1.i1h(this.d1m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).f1m = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.c1m_1, completion);
    i.d1m_1 = it;
    return i;
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.e1m(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.o1m_1 = $collector;
    this.p1m_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$collect$slambda).r1m = function ($this$coroutineScope, $completion) {
    var tmp = this.s1m($this$coroutineScope, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ChannelFlow$collect$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$collect$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = emitAll(this.o1m_1, this.p1m_1.j1h(this.q1m_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ChannelFlow$collect$slambda).s1m = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.o1m_1, this.p1m_1, completion);
    i.q1m_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.r1m($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.f1h_1 = context;
    this.g1h_1 = capacity;
    this.h1h_1 = onBufferOverflow;
    // Inline function 'kotlinx.coroutines.assert' call
  }
  protoOf(ChannelFlow).l1h = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  protoOf(ChannelFlow).m1h = function () {
    return this.g1h_1 === -3 ? -2 : this.g1h_1;
  };
  protoOf(ChannelFlow).j1h = function (scope) {
    return produce(scope, this.f1h_1, this.m1h(), this.h1h_1, CoroutineStart_ATOMIC_getInstance(), VOID, this.l1h());
  };
  protoOf(ChannelFlow).z1f = function (collector, $completion) {
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $completion);
  };
  protoOf(ChannelFlow).k1h = function () {
    return null;
  };
  protoOf(ChannelFlow).toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp0_safe_receiver = this.k1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.flow.internal.ChannelFlow.toString.<anonymous>' call
      props.e(tmp0_safe_receiver);
    }
    if (!(this.f1h_1 === EmptyCoroutineContext_getInstance())) {
      props.e('context=' + toString(this.f1h_1));
    }
    if (!(this.g1h_1 === -3)) {
      props.e('capacity=' + this.g1h_1);
    }
    if (!this.h1h_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.e('onBufferOverflow=' + this.h1h_1.toString());
    }
    return get_classSimpleName(this) + '[' + joinToString(props, ', ') + ']';
  };
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (!properties_initialized_NullSurrogate_kt_39v8bl) {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.qh(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.c1i_1)) {
      // Inline function 'kotlin.error' call
      var message = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + toString(_this__u8e3s4.b1i_1) + ',\n') + ('\t\tbut emission happened in ' + toString(currentContext) + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        var tmp0 = $this.mw();
        var tmp1 = collectJob_0;
        $this = tmp0;
        collectJob_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.u();
      var collectElement = $this_checkContext.b1i_1.u9(key);
      var tmp;
      if (!(key === Key_instance_2)) {
        return !(element === collectElement) ? -2147483648 : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var message = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + toString_0(emissionParentJob) + ', expected child of ' + toString_0(collectJob) + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function SendingCollector(channel) {
    this.t1m_1 = channel;
  }
  protoOf(SendingCollector).n1h = function (value, $completion) {
    return this.t1m_1.g1e(value, $completion);
  };
  function ensureActive_1(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.u1m_1;
  }
  function ThrowingCollector() {
  }
  function $onSubscriptionCOROUTINE$21(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d1n_1 = _this__u8e3s4;
  }
  protoOf($onSubscriptionCOROUTINE$21).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 7;
            var tmp_0 = this;
            tmp_0.e1n_1 = new SafeCollector(this.d1n_1.q1j_1, this.n9());
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.i9_1 = 6;
            this.h9_1 = 2;
            suspendResult = this.d1n_1.r1j_1(this.e1n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.f1n_1 = suspendResult;
            this.i9_1 = 7;
            this.h9_1 = 3;
            continue $sm;
          case 3:
            this.i9_1 = 7;
            this.e1n_1.r9();
            var tmp_1 = this.d1n_1.q1j_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.h9_1 = 4;
              suspendResult = this.d1n_1.q1j_1.s1j(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 5;
              continue $sm;
            }

          case 4:
            this.h9_1 = 5;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            this.i9_1 = 7;
            var t = this.k9_1;
            this.e1n_1.r9();
            throw t;
          case 7:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 7) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function SubscribedFlowCollector() {
  }
  protoOf(SubscribedFlowCollector).s1j = function ($completion) {
    var tmp = new $onSubscriptionCOROUTINE$21(this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  function asStateFlow(_this__u8e3s4) {
    return new ReadonlyStateFlow(_this__u8e3s4, null);
  }
  function asSharedFlow(_this__u8e3s4) {
    return new ReadonlySharedFlow(_this__u8e3s4, null);
  }
  function $collectCOROUTINE$22(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o1n_1 = _this__u8e3s4;
    this.p1n_1 = collector;
  }
  protoOf($collectCOROUTINE$22).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.o1n_1.r1n_1.v1j(this.p1n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function ReadonlyStateFlow(flow, job) {
    this.q1n_1 = job;
    this.r1n_1 = flow;
  }
  protoOf(ReadonlyStateFlow).v = function () {
    return this.r1n_1.v();
  };
  protoOf(ReadonlyStateFlow).v1j = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$22(this, collector, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ReadonlyStateFlow).z1f = function (collector, $completion) {
    return this.v1j(collector, $completion);
  };
  function $collectCOROUTINE$23(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1o_1 = _this__u8e3s4;
    this.b1o_1 = collector;
  }
  protoOf($collectCOROUTINE$23).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.a1o_1.d1o_1.v1j(this.b1o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function ReadonlySharedFlow(flow, job) {
    this.c1o_1 = job;
    this.d1o_1 = flow;
  }
  protoOf(ReadonlySharedFlow).v1j = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$23(this, collector, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ReadonlySharedFlow).z1f = function (collector, $completion) {
    return this.v1j(collector, $completion);
  };
  function OpDescriptor() {
  }
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.kz_1 = id;
    this.lz_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).g19 = function () {
    return this.lz_1.kotlinx$atomicfu$value === this.i18() && !this.n19();
  };
  protoOf(Segment).h19 = function () {
    var tmp0 = this.lz_1;
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.internal.Segment.tryIncPointers.<anonymous>' call
        if (!(!(cur === this.i18()) || this.n19())) {
          tmp$ret$1 = false;
          break $l$block_0;
        }
        if (tmp0.atomicfu$compareAndSet(cur, cur + 65536 | 0)) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(Segment).i19 = function () {
    return this.lz_1.atomicfu$addAndGet(-65536) === this.i18() && !this.n19();
  };
  protoOf(Segment).f19 = function () {
    if (this.lz_1.atomicfu$incrementAndGet() === this.i18()) {
      this.l4();
    }
  };
  function close(_this__u8e3s4) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return cur;
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (next === null) {
        if (cur.q19())
          return cur;
      } else {
        cur = next;
      }
    }
  }
  function _SegmentOrClosed___init__impl__jnexvb(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _SegmentOrClosed___get_isClosed__impl__qmxmlo($this) {
    return _get_value__a43j40($this) === get_CLOSED();
  }
  function _SegmentOrClosed___get_segment__impl__jvcr9l($this) {
    var tmp;
    if (_get_value__a43j40($this) === get_CLOSED()) {
      var message = 'Does not contain segment';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      var tmp_0 = _get_value__a43j40($this);
      tmp = tmp_0 instanceof Segment ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function SegmentOrClosed__toString_impl_pzb2an($this) {
    return 'SegmentOrClosed(value=' + toString_0($this) + ')';
  }
  function SegmentOrClosed__hashCode_impl_4855hs($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function SegmentOrClosed__equals_impl_6erq1g($this, other) {
    if (!(other instanceof SegmentOrClosed))
      return false;
    var tmp0_other_with_cast = other instanceof SegmentOrClosed ? other.v1b_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.v1b_1 = value;
  }
  protoOf(SegmentOrClosed).toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.v1b_1);
  };
  protoOf(SegmentOrClosed).hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.v1b_1);
  };
  protoOf(SegmentOrClosed).equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.v1b_1, other);
  };
  function _get_nextOrClosed__w0gmuv($this) {
    return $this.j19_1.kotlinx$atomicfu$value;
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.o19();
    while (!(cur === null) && cur.g19())
      cur = cur.k19_1.kotlinx$atomicfu$value;
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.l19());
    while (cur.g19()) {
      var tmp0_elvis_lhs = cur.l19();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return cur;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      cur = tmp;
    }
    return cur;
  }
  function access$_get_nextOrClosed__ywzond($this) {
    return _get_nextOrClosed__w0gmuv($this);
  }
  function ConcurrentLinkedListNode(prev) {
    this.j19_1 = atomic$ref$1(null);
    this.k19_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).l19 = function () {
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
    var it = access$_get_nextOrClosed__ywzond(this);
    var tmp;
    if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
      return null;
    } else {
      tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
    }
    return tmp;
  };
  protoOf(ConcurrentLinkedListNode).m19 = function (value) {
    return this.j19_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).n19 = function () {
    return this.l19() == null;
  };
  protoOf(ConcurrentLinkedListNode).o19 = function () {
    return this.k19_1.kotlinx$atomicfu$value;
  };
  protoOf(ConcurrentLinkedListNode).p19 = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    this.k19_1.kotlinx$atomicfu$value = null;
  };
  protoOf(ConcurrentLinkedListNode).q19 = function () {
    return this.j19_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).l4 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.n19())
      return Unit_instance;
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      var tmp0 = next.k19_1;
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.remove.<anonymous>' call
          var upd = cur === null ? null : prev;
          if (tmp0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
      if (!(prev === null))
        prev.j19_1.kotlinx$atomicfu$value = next;
      if (next.g19() && !next.n19())
        continue $l$loop_0;
      if (!(prev === null) && prev.g19())
        continue $l$loop_0;
      return Unit_instance;
    }
  };
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (cur.kz_1.a1(id) < 0 || cur.g19()) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (!(next == null)) {
        cur = next;
        continue $l$loop;
      }
      // Inline function 'kotlin.Long.plus' call
      var newTail = createNewSegment(cur.kz_1.y2(toLong(1)), cur);
      if (cur.m19(newTail)) {
        if (cur.g19()) {
          cur.l4();
        }
        cur = newTail;
      }
    }
    return _SegmentOrClosed___init__impl__jnexvb(cur);
  }
  function access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy() {
    return get_CLOSED();
  }
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (!properties_initialized_ConcurrentLinkedList_kt_kwt434) {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function handleUncaughtCoroutineException(context, exception) {
    var tmp0_iterator = get_platformExceptionHandlers().j();
    while (tmp0_iterator.k()) {
      var handler = tmp0_iterator.l();
      try {
        handler.p11(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _ = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.wy_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.sy_1 = dispatcher;
    this.ty_1 = continuation;
    this.uy_1 = get_UNDEFINED();
    this.vy_1 = threadContextElements(this.n9());
    this.wy_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).n9 = function () {
    return this.ty_1.n9();
  };
  protoOf(DispatchedContinuation).fz = function () {
    return !(this.wy_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).e1o = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.wy_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).o11 = function () {
    this.e1o();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b10();
    }
  };
  protoOf(DispatchedContinuation).xy = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.wy_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state === null) {
        this.wy_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (state instanceof CancellableContinuationImpl) {
          if (this.wy_1.atomicfu$compareAndSet(state, get_REUSABLE_CLAIMED())) {
            return state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          }
        } else {
          if (state !== get_REUSABLE_CLAIMED()) {
            if (!(state instanceof Error)) {
              // Inline function 'kotlin.error' call
              var message = 'Inconsistent state ' + toString_0(state);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).l10 = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.wy_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.wy_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.require' call
          if (!this.wy_1.atomicfu$compareAndSet(state, null)) {
            // Inline function 'kotlin.require.<anonymous>' call
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          // Inline function 'kotlin.error' call
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).hz = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.wy_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.wy_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.wy_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).e10 = function () {
    var state = this.uy_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.uy_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).c10 = function () {
    return this;
  };
  protoOf(DispatchedContinuation).s9 = function (result) {
    var context = this.ty_1.n9();
    var state = toState_0(result);
    if (this.sy_1.l11(context)) {
      this.uy_1 = state;
      this.gz_1 = 0;
      this.sy_1.m11(context, this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().f12();
        if (false && eventLoop.a12()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.z11()) {
          this.uy_1 = state;
          this.gz_1 = 0;
          eventLoop.y11(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.b12(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            this.n9();
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.vy_1;
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>.<anonymous>' call
            this.ty_1.s9(result);
            $l$loop: while (eventLoop.x11()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.q10(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.c12(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).f10 = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.j11_1(cause);
    }
  };
  protoOf(DispatchedContinuation).a18 = function (context, value) {
    this.uy_1 = value;
    this.gz_1 = 1;
    this.sy_1.n11(context, this);
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.sy_1.toString() + ', ' + toDebugString(this.ty_1) + ']';
  };
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (_this__u8e3s4.sy_1.l11(_this__u8e3s4.n9())) {
        _this__u8e3s4.uy_1 = state;
        _this__u8e3s4.gz_1 = 1;
        _this__u8e3s4.sy_1.m11(_this__u8e3s4.n9(), _this__u8e3s4);
        tmp_0 = Unit_instance;
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().f12();
          if (false && eventLoop.a12()) {
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.z11()) {
            _this__u8e3s4.uy_1 = state;
            _this__u8e3s4.gz_1 = 1;
            eventLoop.y11(_this__u8e3s4);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.b12(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.n9().u9(Key_instance_2);
                if (!(job == null) && !job.tv()) {
                  var cause = job.sw();
                  _this__u8e3s4.f10(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.s9(tmp$ret$1);
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                _this__u8e3s4.ty_1;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.vy_1;
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith.<anonymous>' call
                _this__u8e3s4.ty_1.s9(result);
              }
              $l$loop: while (eventLoop.x11()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.q10(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.c12(true);
            }
            tmp_1 = false;
          }
        }
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.s9(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function yieldUndispatched(_this__u8e3s4) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
      // Inline function 'kotlinx.coroutines.assert' call
      var eventLoop = ThreadLocalEventLoop_getInstance().f12();
      if (true && eventLoop.a12()) {
        tmp$ret$0 = false;
        break $l$block;
      }
      var tmp;
      if (eventLoop.z11()) {
        _this__u8e3s4.uy_1 = Unit_instance;
        _this__u8e3s4.gz_1 = 1;
        eventLoop.y11(_this__u8e3s4);
        tmp = true;
      } else {
        // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
        eventLoop.b12(true);
        try {
          // Inline function 'kotlinx.coroutines.internal.yieldUndispatched.<anonymous>' call
          _this__u8e3s4.p10();
          $l$loop: while (eventLoop.x11()) {
          }
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            _this__u8e3s4.q10(e, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.c12(true);
        }
        tmp = false;
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.gz_1 = resumeMode;
  }
  protoOf(DispatchedTask).f10 = function (takenState, cause) {
  };
  protoOf(DispatchedTask).k10 = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).n10 = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yv_1;
  };
  protoOf(DispatchedTask).p10 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    var taskContext = get_taskContext(this);
    var fatalException = null;
    try {
      var tmp = this.c10();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.ty_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.vy_1;
      // Inline function 'kotlinx.coroutines.DispatchedTask.run.<anonymous>' call
      var context = continuation.n9();
      var state = this.e10();
      var exception = this.n10(state);
      var job = exception == null && get_isCancellableMode(this.gz_1) ? context.u9(Key_instance_2) : null;
      if (!(job == null) && !job.tv()) {
        var cause = job.sw();
        this.f10(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.s9(tmp$ret$0);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.s9(tmp$ret$1);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.k10(state);
          var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
          continuation.s9(tmp$ret$3);
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'kotlinx.coroutines.afterTask' call
        // Inline function 'kotlin.Companion.success' call
        tmp_0 = _Result___init__impl__xyqfz8(Unit_instance);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e_0 = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var result = tmp_0;
      this.q10(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).q10 = function (exception, finallyException) {
    if (exception === null && finallyException === null)
      return Unit_instance;
    if (!(exception === null) && !(finallyException === null)) {
      addSuppressed(exception, finallyException);
    }
    var cause = exception == null ? finallyException : exception;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.c10().n9(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.c10();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.gz_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.sy_1;
      var context = delegate.n9();
      if (dispatcher.l11(context)) {
        dispatcher.m11(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().f12();
    if (eventLoop.z11()) {
      eventLoop.y11(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.b12(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.c10(), true);
        $l$loop: while (eventLoop.x11()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.q10(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.c12(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.e10();
    var exception = _this__u8e3s4.n10(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.k10(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      this_0.ty_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.vy_1;
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith.<anonymous>' call
      this_0.ty_1.s9(result);
    } else {
      delegate.s9(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).e(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.e((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
        list.e(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function access$_get_holder__kkflen($this) {
    return _get_holder__f6h5pd($this);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.internal.callUndeliveredElement.<anonymous>' call
      handleCoroutineException(context, tmp0_safe_receiver);
    }
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) && !(undeliveredElementException.cause === ex)) {
          addSuppressed(undeliveredElementException, ex);
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + toString_0(element), ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_instance;
    };
  }
  function ContextScope(context) {
    this.f1o_1 = context;
  }
  protoOf(ContextScope).sv = function () {
    return this.f1o_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.f1o_1) + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.gy_1 = uCont;
  }
  protoOf(ScopeCoroutine).lx = function () {
    return true;
  };
  protoOf(ScopeCoroutine).dw = function (state) {
    resumeCancellableWith(intercepted(this.gy_1), recoverResult(state, this.gy_1));
  };
  protoOf(ScopeCoroutine).cw = function (state) {
    this.gy_1.s9(recoverResult(state, this.gy_1));
  };
  function Symbol(symbol) {
    this.g1o_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.g1o_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? 2147483647 : maxValue;
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).f1();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    maxValue = maxValue === VOID ? new Long(-1, 2147483647) : maxValue;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.a1(parsed) <= 0 ? parsed.a1(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var message_0 = "System property '" + propertyName + "' should be in range " + minValue.toString() + '..' + maxValue.toString() + ", but is '" + parsed.toString() + "'";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(fatalCompletion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure(completion, e) {
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.s9(tmp$ret$0);
    throw e;
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.bw(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        state.yv_1;
        if (true) {
          throw recoverStackTrace(state.yv_1, _this__u8e3s4.gy_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.yv_1, _this__u8e3s4.gy_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$2 = tmp_1;
    }
    return tmp$ret$2;
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__u8e3s4, receiver, block) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.bw(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var e_0 = state.yv_1;
        var tmp_3;
        if (e_0 instanceof TimeoutCancellationException) {
          tmp_3 = e_0.g17_1 === _this__u8e3s4;
        } else {
          tmp_3 = false;
        }
        if (!tmp_3) {
          throw recoverStackTrace(state.yv_1, _this__u8e3s4.gy_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.yv_1, _this__u8e3s4.gy_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$2 = tmp_1;
    }
    return tmp$ret$2;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        completion.n9();
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$5 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.s9(tmp$ret$5);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
        var tmp$ret$8 = _Result___init__impl__xyqfz8(value_0);
        actualCompletion.s9(tmp$ret$8);
      }
    }
  }
  var DUMMY_PROCESS_RESULT_FUNCTION;
  function get_STATE_REG() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_REG;
  }
  var STATE_REG;
  function get_STATE_COMPLETED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_COMPLETED;
  }
  var STATE_COMPLETED;
  function get_STATE_CANCELLED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_CANCELLED;
  }
  var STATE_CANCELLED;
  function get_NO_RESULT() {
    _init_properties_Select_kt__zhm2jg();
    return NO_RESULT;
  }
  var NO_RESULT;
  var PARAM_CLAUSE_0;
  function SelectInstance() {
  }
  function trySelectInternal($this, clauseObject, internalResult) {
    $l$loop: while (true) {
      var curState = $this.k1b_1.kotlinx$atomicfu$value;
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.l1o($this, internalResult);
        if ($this.k1b_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.m1b_1 = internalResult;
          if (tryResume_1(cont, onCancellation))
            return 0;
          $this.m1b_1 = get_NO_RESULT();
          return 2;
        }
      } else {
        var tmp_0;
        if (equals(curState, get_STATE_COMPLETED())) {
          tmp_0 = true;
        } else {
          tmp_0 = curState instanceof ClauseData;
        }
        if (tmp_0)
          return 3;
        else {
          if (equals(curState, get_STATE_CANCELLED()))
            return 2;
          else {
            if (equals(curState, get_STATE_REG())) {
              if ($this.k1b_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, KtList)) {
                if ($this.k1b_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
                  return 1;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected state: ' + toString(curState);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  }
  function findClause($this, clauseObject) {
    var tmp0_elvis_lhs = $this.l1b_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = clauses.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'kotlinx.coroutines.selects.SelectImplementation.findClause.<anonymous>' call
        if (element.i1o_1 === clauseObject) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Clause with object ' + toString(clauseObject) + ' is not found';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function ClauseData() {
  }
  protoOf(ClauseData).l1o = function (select, internalResult) {
    var tmp0_safe_receiver = this.k1o_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver(select, this.j1o_1, internalResult);
  };
  function SelectImplementation() {
  }
  protoOf(SelectImplementation).n1b = function (clauseObject, result) {
    return TrySelectDetailedResult_0(trySelectInternal(this, clauseObject, result));
  };
  var TrySelectDetailedResult_SUCCESSFUL_instance;
  var TrySelectDetailedResult_REREGISTER_instance;
  var TrySelectDetailedResult_CANCELLED_instance;
  var TrySelectDetailedResult_ALREADY_SELECTED_instance;
  var TrySelectDetailedResult_entriesInitialized;
  function TrySelectDetailedResult_initEntries() {
    if (TrySelectDetailedResult_entriesInitialized)
      return Unit_instance;
    TrySelectDetailedResult_entriesInitialized = true;
    TrySelectDetailedResult_SUCCESSFUL_instance = new TrySelectDetailedResult('SUCCESSFUL', 0);
    TrySelectDetailedResult_REREGISTER_instance = new TrySelectDetailedResult('REREGISTER', 1);
    TrySelectDetailedResult_CANCELLED_instance = new TrySelectDetailedResult('CANCELLED', 2);
    TrySelectDetailedResult_ALREADY_SELECTED_instance = new TrySelectDetailedResult('ALREADY_SELECTED', 3);
  }
  function TrySelectDetailedResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TrySelectDetailedResult_0(trySelectInternalResult) {
    _init_properties_Select_kt__zhm2jg();
    var tmp;
    switch (trySelectInternalResult) {
      case 0:
        tmp = TrySelectDetailedResult_SUCCESSFUL_getInstance();
        break;
      case 1:
        tmp = TrySelectDetailedResult_REREGISTER_getInstance();
        break;
      case 2:
        tmp = TrySelectDetailedResult_CANCELLED_getInstance();
        break;
      case 3:
        tmp = TrySelectDetailedResult_ALREADY_SELECTED_getInstance();
        break;
      default:
        var message = 'Unexpected internal result: ' + trySelectInternalResult;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function tryResume_1(_this__u8e3s4, onCancellation) {
    _init_properties_Select_kt__zhm2jg();
    var tmp0_elvis_lhs = _this__u8e3s4.hy(Unit_instance, null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.iy(token);
    return true;
  }
  function DUMMY_PROCESS_RESULT_FUNCTION$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    _init_properties_Select_kt__zhm2jg();
    return null;
  }
  function TrySelectDetailedResult_SUCCESSFUL_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_SUCCESSFUL_instance;
  }
  function TrySelectDetailedResult_REREGISTER_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_REREGISTER_instance;
  }
  function TrySelectDetailedResult_CANCELLED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_CANCELLED_instance;
  }
  function TrySelectDetailedResult_ALREADY_SELECTED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_ALREADY_SELECTED_instance;
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (!properties_initialized_Select_kt_7rpl36) {
      properties_initialized_Select_kt_7rpl36 = true;
      DUMMY_PROCESS_RESULT_FUNCTION = DUMMY_PROCESS_RESULT_FUNCTION$lambda;
      STATE_REG = new Symbol('STATE_REG');
      STATE_COMPLETED = new Symbol('STATE_COMPLETED');
      STATE_CANCELLED = new Symbol('STATE_CANCELLED');
      NO_RESULT = new Symbol('NO_RESULT');
      PARAM_CLAUSE_0 = new Symbol('PARAM_CLAUSE_0');
    }
  }
  function get_NO_OWNER() {
    _init_properties_Mutex_kt__jod56b();
    return NO_OWNER;
  }
  var NO_OWNER;
  var ON_LOCK_ALREADY_LOCKED_BY_OWNER;
  function Mutex() {
  }
  function Mutex_0(locked) {
    locked = locked === VOID ? false : locked;
    _init_properties_Mutex_kt__jod56b();
    return new MutexImpl(locked);
  }
  function MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this$0, this$1) {
    return function (it) {
      this$0.x1o_1.kotlinx$atomicfu$value = this$1.a1p_1;
      this$0.o1o(this$1.a1p_1);
      return Unit_instance;
    };
  }
  function MutexImpl$CancellableContinuationWithOwner$resume$lambda(this$0, this$1) {
    return function (it) {
      this$0.o1o(this$1.a1p_1);
      return Unit_instance;
    };
  }
  function holdsLockImpl($this, owner) {
    $l$loop: while (true) {
      if (!$this.c1p())
        return 0;
      var curOwner = $this.x1o_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop;
      return curOwner === owner ? 1 : 2;
    }
  }
  function lockSuspend($this, owner, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>' call
      var contWithOwner = new CancellableContinuationWithOwner($this, cancellable, owner);
      $this.acquireCont(contWithOwner);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.j10();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.vx();
  }
  function tryLockImpl($this, owner) {
    $l$loop: while (true) {
      if ($this.k1p()) {
        // Inline function 'kotlinx.coroutines.assert' call
        $this.x1o_1.kotlinx$atomicfu$value = owner;
        return 0;
      } else {
        if (owner == null)
          return 1;
        switch (holdsLockImpl($this, owner)) {
          case 1:
            return 2;
          case 2:
            return 1;
          case 0:
            continue $l$loop;
        }
      }
    }
  }
  function CancellableContinuationWithOwner($outer, cont, owner) {
    this.b1p_1 = $outer;
    this.z1o_1 = cont;
    this.a1p_1 = owner;
  }
  protoOf(CancellableContinuationWithOwner).n9 = function () {
    return this.z1o_1.n9();
  };
  protoOf(CancellableContinuationWithOwner).jy = function (cause) {
    return this.z1o_1.jy(cause);
  };
  protoOf(CancellableContinuationWithOwner).iy = function (token) {
    this.z1o_1.iy(token);
  };
  protoOf(CancellableContinuationWithOwner).ly = function (handler) {
    this.z1o_1.ly(handler);
  };
  protoOf(CancellableContinuationWithOwner).kg = function (result) {
    this.z1o_1.s9(result);
  };
  protoOf(CancellableContinuationWithOwner).s9 = function (result) {
    return this.kg(result);
  };
  protoOf(CancellableContinuationWithOwner).l1p = function (_this__u8e3s4, value) {
    this.z1o_1.my(_this__u8e3s4, Unit_instance);
  };
  protoOf(CancellableContinuationWithOwner).my = function (_this__u8e3s4, value) {
    return this.l1p(_this__u8e3s4, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(CancellableContinuationWithOwner).m10 = function (segment, index) {
    this.z1o_1.m10(segment, index);
  };
  protoOf(CancellableContinuationWithOwner).m1p = function (value, idempotent, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    var token = this.z1o_1.hy(Unit_instance, idempotent, MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this.b1p_1, this));
    if (!(token == null)) {
      // Inline function 'kotlinx.coroutines.assert' call
      this.b1p_1.x1o_1.kotlinx$atomicfu$value = this.a1p_1;
    }
    return token;
  };
  protoOf(CancellableContinuationWithOwner).hy = function (value, idempotent, onCancellation) {
    return this.m1p(value instanceof Unit ? value : THROW_CCE(), idempotent, onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).n1p = function (value, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    this.b1p_1.x1o_1.kotlinx$atomicfu$value = this.a1p_1;
    this.z1o_1.ny(Unit_instance, MutexImpl$CancellableContinuationWithOwner$resume$lambda(this.b1p_1, this));
  };
  protoOf(CancellableContinuationWithOwner).ny = function (value, onCancellation) {
    return this.n1p(value instanceof Unit ? value : THROW_CCE(), onCancellation);
  };
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, $owner) {
    return function (it) {
      this$0.o1o($owner);
      return Unit_instance;
    };
  }
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8, owner, _anonymous_parameter_2__qggqfi) {
      return MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, owner);
    };
  }
  function MutexImpl(locked) {
    SemaphoreImpl.call(this, 1, locked ? 1 : 0);
    this.x1o_1 = atomic$ref$1(locked ? null : get_NO_OWNER());
    var tmp = this;
    tmp.y1o_1 = MutexImpl$onSelectCancellationUnlockConstructor$lambda(this);
  }
  protoOf(MutexImpl).c1p = function () {
    return this.o1p() === 0;
  };
  protoOf(MutexImpl).m1o = function (owner, $completion) {
    if (this.p1p(owner))
      return Unit_instance;
    return lockSuspend(this, owner, $completion);
  };
  protoOf(MutexImpl).p1p = function (owner) {
    var tmp;
    switch (tryLockImpl(this, owner)) {
      case 0:
        tmp = true;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        var message = 'This mutex is already locked by the specified owner: ' + toString_0(owner);
        throw IllegalStateException_init_$Create$(toString(message));
      default:
        var message_0 = 'unexpected';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MutexImpl).o1o = function (owner) {
    $l$loop_0: while (true) {
      // Inline function 'kotlin.check' call
      if (!this.c1p()) {
        // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
        var message = 'This mutex is not locked';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var curOwner = this.x1o_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop_0;
      // Inline function 'kotlin.check' call
      if (!(curOwner === owner || owner == null)) {
        // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
        var message_0 = 'This mutex is locked by ' + toString_0(curOwner) + ', but ' + toString_0(owner) + ' is expected';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (!this.x1o_1.atomicfu$compareAndSet(curOwner, get_NO_OWNER()))
        continue $l$loop_0;
      this.q1p();
      return Unit_instance;
    }
  };
  protoOf(MutexImpl).toString = function () {
    return 'Mutex@' + get_hexAddress(this) + '[isLocked=' + this.c1p() + ',owner=' + toString_0(this.x1o_1.kotlinx$atomicfu$value) + ']';
  };
  var properties_initialized_Mutex_kt_yv4p3j;
  function _init_properties_Mutex_kt__jod56b() {
    if (!properties_initialized_Mutex_kt_yv4p3j) {
      properties_initialized_Mutex_kt_yv4p3j = true;
      NO_OWNER = new Symbol('NO_OWNER');
      ON_LOCK_ALREADY_LOCKED_BY_OWNER = new Symbol('ALREADY_LOCKED_BY_OWNER');
    }
  }
  function get_MAX_SPIN_CYCLES() {
    _init_properties_Semaphore_kt__t514r6();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function get_PERMIT() {
    _init_properties_Semaphore_kt__t514r6();
    return PERMIT;
  }
  var PERMIT;
  function get_TAKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return TAKEN;
  }
  var TAKEN;
  function get_BROKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return BROKEN;
  }
  var BROKEN;
  function get_CANCELLED() {
    _init_properties_Semaphore_kt__t514r6();
    return CANCELLED;
  }
  var CANCELLED;
  function get_SEGMENT_SIZE_0() {
    _init_properties_Semaphore_kt__t514r6();
    return SEGMENT_SIZE_0;
  }
  var SEGMENT_SIZE_0;
  function decPermits($this) {
    $l$loop: while (true) {
      var p = $this.i1p_1.atomicfu$getAndDecrement();
      if (p > $this.d1p_1)
        continue $l$loop;
      return p;
    }
  }
  function coerceAvailablePermitsAtMaximum($this) {
    $l$loop_0: while (true) {
      var cur = $this.i1p_1.kotlinx$atomicfu$value;
      if (cur <= $this.d1p_1)
        break $l$loop_0;
      if ($this.i1p_1.atomicfu$compareAndSet(cur, $this.d1p_1))
        break $l$loop_0;
    }
  }
  function addAcquireToQueue($this, waiter) {
    var curTail = $this.g1p_1.kotlinx$atomicfu$value;
    var enqIdx = $this.h1p_1.atomicfu$getAndIncrement$long();
    var createNewSegment = createSegment$ref_0();
    var tmp2 = $this.g1p_1;
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var tmp3 = enqIdx.b3(toLong(other));
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(curTail, tmp3, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp1 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = tmp2.kotlinx$atomicfu$value;
              if (cur.kz_1.a1(tmp1.kz_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp1.h19()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp2.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.i19()) {
                  cur.l4();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp1.i19()) {
                tmp1.l4();
              }
            }
            tmp$ret$1 = Unit_instance;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$2);
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var i = enqIdx.c3(toLong(other_0)).f1();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    if (segment.v1p_1.atomicfu$get(i).atomicfu$compareAndSet(null, waiter)) {
      waiter.m10(segment, i);
      return true;
    }
    var tmp14 = get_PERMIT();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    var value = get_TAKEN();
    if (segment.v1p_1.atomicfu$get(i).atomicfu$compareAndSet(tmp14, value)) {
      if (isInterface(waiter, CancellableContinuation)) {
        if (!isInterface(waiter, CancellableContinuation))
          THROW_CCE();
        waiter.ny(Unit_instance, $this.j1p_1);
      } else {
        if (isInterface(waiter, SelectInstance)) {
          waiter.h1o(Unit_instance);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'unexpected: ' + toString(waiter);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      return true;
    }
    // Inline function 'kotlinx.coroutines.assert' call
    return false;
  }
  function tryResumeNextFromQueue($this) {
    var curHead = $this.e1p_1.kotlinx$atomicfu$value;
    var deqIdx = $this.f1p_1.atomicfu$getAndIncrement$long();
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var id = deqIdx.b3(toLong(other));
    var createNewSegment = createSegment$ref_1();
    var tmp2 = $this.e1p_1;
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(curHead, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp1 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = tmp2.kotlinx$atomicfu$value;
              if (cur.kz_1.a1(tmp1.kz_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp1.h19()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp2.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.i19()) {
                  cur.l4();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp1.i19()) {
                tmp1.l4();
              }
            }
            tmp$ret$1 = Unit_instance;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$2);
    segment.p19();
    if (segment.kz_1.a1(id) > 0)
      return false;
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var i = deqIdx.c3(toLong(other_0)).f1();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.getAndSet' call
    var value = get_PERMIT();
    var cellState = segment.v1p_1.atomicfu$get(i).atomicfu$getAndSet(value);
    if (cellState === null) {
      // Inline function 'kotlin.repeat' call
      var times = get_MAX_SPIN_CYCLES();
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.tryResumeNextFromQueue.<anonymous>' call
          // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.get' call
          if (segment.v1p_1.atomicfu$get(i).kotlinx$atomicfu$value === get_TAKEN())
            return true;
        }
         while (inductionVariable < times);
      var tmp15 = get_PERMIT();
      // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
      var value_0 = get_BROKEN();
      return !segment.v1p_1.atomicfu$get(i).atomicfu$compareAndSet(tmp15, value_0);
    } else if (cellState === get_CANCELLED())
      return false;
    else
      return tryResumeAcquire(cellState, $this);
  }
  function tryResumeAcquire(_this__u8e3s4, $this) {
    var tmp;
    if (isInterface(_this__u8e3s4, CancellableContinuation)) {
      if (!isInterface(_this__u8e3s4, CancellableContinuation))
        THROW_CCE();
      var token = _this__u8e3s4.hy(Unit_instance, null, $this.j1p_1);
      var tmp_0;
      if (!(token == null)) {
        _this__u8e3s4.iy(token);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        tmp = _this__u8e3s4.h1b($this, Unit_instance);
      } else {
        var message = 'unexpected: ' + toString(_this__u8e3s4);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function SemaphoreImpl$onCancellationRelease$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8) {
      this$0.q1p();
      return Unit_instance;
    };
  }
  function createSegment$ref_0() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function createSegment$ref_1() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function SemaphoreImpl(permits, acquiredPermits) {
    this.d1p_1 = permits;
    this.f1p_1 = atomic$long$1(new Long(0, 0));
    this.h1p_1 = atomic$long$1(new Long(0, 0));
    // Inline function 'kotlin.require' call
    if (!(this.d1p_1 > 0)) {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.<anonymous>' call
      var message = 'Semaphore should have at least 1 permit, but had ' + this.d1p_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(0 <= acquiredPermits ? acquiredPermits <= this.d1p_1 : false)) {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.<anonymous>' call
      var message_0 = 'The number of acquired permits should be in 0..' + this.d1p_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var s = new SemaphoreSegment(new Long(0, 0), null, 2);
    this.e1p_1 = atomic$ref$1(s);
    this.g1p_1 = atomic$ref$1(s);
    this.i1p_1 = atomic$int$1(this.d1p_1 - acquiredPermits | 0);
    var tmp = this;
    tmp.j1p_1 = SemaphoreImpl$onCancellationRelease$lambda(this);
  }
  protoOf(SemaphoreImpl).o1p = function () {
    // Inline function 'kotlin.math.max' call
    var a = this.i1p_1.kotlinx$atomicfu$value;
    return Math.max(a, 0);
  };
  protoOf(SemaphoreImpl).k1p = function () {
    $l$loop: while (true) {
      var p = this.i1p_1.kotlinx$atomicfu$value;
      if (p > this.d1p_1) {
        coerceAvailablePermitsAtMaximum(this);
        continue $l$loop;
      }
      if (p <= 0)
        return false;
      if (this.i1p_1.atomicfu$compareAndSet(p, p - 1 | 0))
        return true;
    }
  };
  protoOf(SemaphoreImpl).acquireCont = function (waiter) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquire' call
      while (true) {
        var p = decPermits(this);
        if (p > 0) {
          // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquire.<anonymous>' call
          waiter.ny(Unit_instance, this.j1p_1);
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
        // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquire.<anonymous>' call
        if (addAcquireToQueue(this, isInterface(waiter, Waiter) ? waiter : THROW_CCE())) {
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(SemaphoreImpl).q1p = function () {
    while (true) {
      var p = this.i1p_1.atomicfu$getAndIncrement();
      if (p >= this.d1p_1) {
        coerceAvailablePermitsAtMaximum(this);
        // Inline function 'kotlin.error' call
        var message = 'The number of released permits cannot be greater than ' + this.d1p_1;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      if (p >= 0)
        return Unit_instance;
      if (tryResumeNextFromQueue(this))
        return Unit_instance;
    }
  };
  function SemaphoreSegment(id, prev, pointers) {
    Segment.call(this, id, prev, pointers);
    this.v1p_1 = atomicfu$AtomicRefArray$ofNulls(get_SEGMENT_SIZE_0());
  }
  protoOf(SemaphoreSegment).i18 = function () {
    return get_SEGMENT_SIZE_0();
  };
  protoOf(SemaphoreSegment).mz = function (index, cause, context) {
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.set' call
    var value = get_CANCELLED();
    this.v1p_1.atomicfu$get(index).kotlinx$atomicfu$value = value;
    this.f19();
  };
  protoOf(SemaphoreSegment).toString = function () {
    return 'SemaphoreSegment[id=' + this.kz_1.toString() + ', hashCode=' + hashCode(this) + ']';
  };
  function createSegment_0(id, prev) {
    _init_properties_Semaphore_kt__t514r6();
    return new SemaphoreSegment(id, prev, 0);
  }
  var properties_initialized_Semaphore_kt_uqcwok;
  function _init_properties_Semaphore_kt__t514r6() {
    if (!properties_initialized_Semaphore_kt_uqcwok) {
      properties_initialized_Semaphore_kt_uqcwok = true;
      MAX_SPIN_CYCLES = systemProp('kotlinx.coroutines.semaphore.maxSpinCycles', 100);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE_0 = systemProp('kotlinx.coroutines.semaphore.segmentSize', 16);
    }
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  function invokeIt(_this__u8e3s4, cause) {
    if (typeof _this__u8e3s4 === 'function')
      _this__u8e3s4(cause);
    else {
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().y16_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' || typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return !(typeof navigator === 'undefined') && navigator != null && navigator.userAgent != null && !(typeof navigator.userAgent === 'undefined') && !(typeof navigator.userAgent.match === 'undefined') && navigator.userAgent.match('\\bjsdom\\b');
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.sv().rh(context);
    return !(combined === Dispatchers_getInstance().y16_1) && combined.u9(Key_instance) == null ? combined.rh(Dispatchers_getInstance().y16_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.rh(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).cw = function (state) {
    return this.gy_1.s9(recoverResult(state, this.gy_1));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).xa();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).c1q = function () {
    process.nextTick(this.j1q_1.h1q_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.n1q();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.g1q_1 = dispatcher;
    var tmp = this;
    tmp.h1q_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).o1q = function () {
    this.g1q_1.c1q();
  };
  protoOf(ScheduledMessageQueue).p1q = function () {
    setTimeout(this.h1q_1, 0);
  };
  protoOf(ScheduledMessageQueue).q1q = function (timeout) {
    setTimeout(this.h1q_1, timeout);
  };
  function w3cSetTimeout(handler, timeout) {
    return setTimeout(handler, timeout);
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.e1r_1 && event.data == this$0.f1r_1) {
        event.stopPropagation();
        this$0.n1q();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.n1q();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.e1r_1 = window_0;
    this.f1r_1 = 'dispatchCoroutine';
    this.e1r_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).o1q = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).p1q = function () {
    this.e1r_1.postMessage(this.f1r_1, '*');
  };
  function w3cSetTimeout_0(window_0, handler, timeout) {
    return setTimeout_0(window_0, handler, timeout);
  }
  function w3cClearTimeout(window_0, handle) {
    return window_0.clearTimeout(handle);
  }
  function w3cClearTimeout_0(handle) {
    return clearTimeout(handle);
  }
  function setTimeout_0(window_0, handler, timeout) {
    return window_0.setTimeout(handler, timeout);
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function propagateExceptionFinalResort(exception) {
    console.error(exception.toString());
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.y16_1 = createDefaultDispatcher();
    this.z16_1 = Unconfined_getInstance();
    this.a17_1 = new JsMainDispatcher(this.y16_1, false);
    this.b17_1 = null;
  }
  protoOf(Dispatchers).c17 = function () {
    var tmp0_elvis_lhs = this.b17_1;
    return tmp0_elvis_lhs == null ? this.a17_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.h1r_1 = delegate;
    this.i1r_1 = invokeImmediately;
    this.j1r_1 = this.i1r_1 ? this : new JsMainDispatcher(this.h1r_1, true);
  }
  protoOf(JsMainDispatcher).w16 = function () {
    return this.j1r_1;
  };
  protoOf(JsMainDispatcher).l11 = function (context) {
    return !this.i1r_1;
  };
  protoOf(JsMainDispatcher).m11 = function (context, block) {
    return this.h1r_1.m11(context, block);
  };
  protoOf(JsMainDispatcher).n11 = function (context, block) {
    return this.h1r_1.n11(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.x16();
    return tmp0_elvis_lhs == null ? this.h1r_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).m11 = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.o1r_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.o1r_1);
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.o1r_1, this.o1r_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.o1r_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return TaskContext_instance;
  }
  function TaskContext() {
  }
  var TaskContext_instance;
  function TaskContext_getInstance() {
    return TaskContext_instance;
  }
  function SafeCollector$collectContextSize$lambda(count, _anonymous_parameter_1__qggqgd) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.a1i_1 = collector;
    this.b1i_1 = collectContext;
    var tmp = this;
    tmp.c1i_1 = this.b1i_1.qh(0, SafeCollector$collectContextSize$lambda);
    this.d1i_1 = null;
  }
  protoOf(SafeCollector).n1h = function (value, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.n9();
    ensureActive(currentContext);
    if (!(this.d1i_1 === currentContext)) {
      checkContext(this, currentContext);
      this.d1i_1 = currentContext;
    }
    return this.a1i_1.n1h(value, $completion);
  };
  protoOf(SafeCollector).r9 = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).c1q = function () {
    this.j1q_1.q1q(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.p10();
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlinx.coroutines.SetTimeoutBasedDispatcher.scheduleResumeAfterDelay.<anonymous>.<anonymous>' call
      $continuation.my(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.j1q_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).m11 = function (context, block) {
    this.j1q_1.a1r(block);
  };
  protoOf(SetTimeoutBasedDispatcher).r11 = function (timeMillis, block, context) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).q11 = function (timeMillis, continuation) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ClearTimeout(handle);
    continuation.ly(tmp$ret$1);
  };
  function MessageQueue() {
    this.k1q_1 = ArrayDeque_init_$Create$();
    this.l1q_1 = 16;
    this.m1q_1 = false;
  }
  protoOf(MessageQueue).n = function () {
    return this.k1q_1.te_1;
  };
  protoOf(MessageQueue).r1q = function (index, element) {
    this.k1q_1.h2(index, element);
  };
  protoOf(MessageQueue).h2 = function (index, element) {
    return this.r1q(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).s1q = function (element) {
    return this.k1q_1.e(element);
  };
  protoOf(MessageQueue).e = function (element) {
    return this.s1q((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).t1q = function (index, elements) {
    return this.k1q_1.e2(index, elements);
  };
  protoOf(MessageQueue).e2 = function (index, elements) {
    return this.t1q(index, elements);
  };
  protoOf(MessageQueue).u1q = function (elements) {
    return this.k1q_1.o(elements);
  };
  protoOf(MessageQueue).o = function (elements) {
    return this.u1q(elements);
  };
  protoOf(MessageQueue).f2 = function () {
    this.k1q_1.f2();
  };
  protoOf(MessageQueue).v1q = function (element) {
    return this.k1q_1.m(element);
  };
  protoOf(MessageQueue).m = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.v1q((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).p = function (index) {
    return this.k1q_1.p(index);
  };
  protoOf(MessageQueue).w1q = function (element) {
    return this.k1q_1.r(element);
  };
  protoOf(MessageQueue).r = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.w1q((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).q = function () {
    return this.k1q_1.q();
  };
  protoOf(MessageQueue).j = function () {
    return this.k1q_1.j();
  };
  protoOf(MessageQueue).x1q = function (element) {
    return this.k1q_1.y1(element);
  };
  protoOf(MessageQueue).y1 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.x1q((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).a2 = function (index) {
    return this.k1q_1.a2(index);
  };
  protoOf(MessageQueue).y1q = function (element) {
    return this.k1q_1.d2(element);
  };
  protoOf(MessageQueue).d2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.y1q((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).i2 = function (index) {
    return this.k1q_1.i2(index);
  };
  protoOf(MessageQueue).z1q = function (index, element) {
    return this.k1q_1.g2(index, element);
  };
  protoOf(MessageQueue).g2 = function (index, element) {
    return this.z1q(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).b2 = function (fromIndex, toIndex) {
    return this.k1q_1.b2(fromIndex, toIndex);
  };
  protoOf(MessageQueue).a1r = function (element) {
    this.s1q(element);
    if (!this.m1q_1) {
      this.m1q_1 = true;
      this.o1q();
    }
  };
  protoOf(MessageQueue).n1q = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.l1q_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.p10();
        }
         while (inductionVariable < times);
    }finally {
      if (this.q()) {
        this.m1q_1 = false;
      } else {
        this.p1q();
      }
    }
  };
  function WindowClearTimeout($outer, handle) {
    this.s1r_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).qy = function () {
    w3cClearTimeout(this.s1r_1.u1r_1, this.w1r_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlinx.coroutines.WindowDispatcher.scheduleResumeAfterDelay.<anonymous>.<anonymous>' call
      $continuation.my(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function Runnable$run$ref($boundThis) {
    var l = function () {
      $boundThis.p10();
      return Unit_instance;
    };
    l.callableName = 'run';
    return l;
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.u1r_1 = window_0;
    this.v1r_1 = new WindowMessageQueue(this.u1r_1);
  }
  protoOf(WindowDispatcher).m11 = function (context, block) {
    return this.v1r_1.a1r(block);
  };
  protoOf(WindowDispatcher).q11 = function (timeMillis, continuation) {
    var handle = w3cSetTimeout_0(this.u1r_1, WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new WindowClearTimeout(this, handle);
    continuation.ly(tmp$ret$1);
  };
  protoOf(WindowDispatcher).r11 = function (timeMillis, block, context) {
    var handle = w3cSetTimeout_0(this.u1r_1, Runnable$run$ref(block), delayToInt(timeMillis));
    return new WindowClearTimeout(this, handle);
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).f1();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.w1r_1 = handle;
  }
  protoOf(ClearTimeout).qy = function () {
    w3cClearTimeout_0(this.w1r_1);
  };
  protoOf(ClearTimeout).py = function (cause) {
    this.qy();
  };
  protoOf(ClearTimeout).invoke = function (cause) {
    return this.py(cause);
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.w1r_1 + ']';
  };
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  protoOf(LinkedListHead).w12 = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this.q12_1 = this;
    this.r12_1 = this;
    this.s12_1 = false;
  }
  protoOf(LinkedListNode).x12 = function (node) {
    var prev = this.r12_1;
    node.q12_1 = this;
    node.r12_1 = prev;
    prev.q12_1 = node;
    this.r12_1 = node;
  };
  protoOf(LinkedListNode).w12 = function () {
    return this.y12();
  };
  protoOf(LinkedListNode).qy = function () {
    this.w12();
  };
  protoOf(LinkedListNode).y12 = function () {
    if (this.s12_1)
      return false;
    var prev = this.r12_1;
    var next = this.q12_1;
    prev.q12_1 = next;
    next.r12_1 = prev;
    this.s12_1 = true;
    return true;
  };
  protoOf(LinkedListNode).e13 = function (node) {
    if (!(this.q12_1 === this))
      return false;
    this.x12(node);
    return true;
  };
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function SynchronizedObject() {
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.g12_1 = null;
  }
  protoOf(CommonThreadLocal).h12 = function () {
    var tmp = this.g12_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).i12 = function (value) {
    this.g12_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).xw = invokeOnCompletion$default;
  protoOf(JobSupport).cx = cancel$default;
  protoOf(JobSupport).rh = plus;
  protoOf(JobSupport).u9 = get_0;
  protoOf(JobSupport).qh = fold;
  protoOf(JobSupport).ph = minusKey_0;
  protoOf(CancellableContinuationImpl).ky = cancel$default_0;
  protoOf(CoroutineDispatcher).u9 = get;
  protoOf(CoroutineDispatcher).ph = minusKey;
  protoOf(BufferedChannel).p1e = close$default;
  protoOf(ChannelCoroutine).p1e = close$default;
  protoOf(CancellableContinuationWithOwner).ky = cancel$default_0;
  protoOf(MutexImpl).n1o = lock$default;
  protoOf(MutexImpl).p1o = unlock$default;
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  Key_instance_2 = new Key_1();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_3 = new Key_2();
  counter = 0;
  DEBUG = false;
  TaskContext_instance = new TaskContext();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BufferOverflow_DROP_OLDEST_getInstance;
  _.$_$.b = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.c = cancelAndJoin;
  _.$_$.d = coroutineScope;
  _.$_$.e = delay;
  _.$_$.f = withContext;
  _.$_$.g = withTimeoutOrNull;
  _.$_$.h = yield_0;
  _.$_$.i = ChannelResult__getOrNull_impl_f5e07h;
  _.$_$.j = Key_instance_1;
  _.$_$.k = Dispatchers_getInstance;
  _.$_$.l = Key_instance_2;
  _.$_$.m = Channel;
  _.$_$.n = cancelConsumed;
  _.$_$.o = FlowCollector;
  _.$_$.p = MutableSharedFlow;
  _.$_$.q = MutableStateFlow;
  _.$_$.r = asSharedFlow;
  _.$_$.s = asStateFlow;
  _.$_$.t = flow;
  _.$_$.u = receiveAsFlow;
  _.$_$.v = Mutex_0;
  _.$_$.w = CancellableContinuationImpl;
  _.$_$.x = CompletableDeferred;
  _.$_$.y = CoroutineDispatcher;
  _.$_$.z = CoroutineScope_0;
  _.$_$.a1 = CoroutineScope;
  _.$_$.b1 = invokeOnTimeout;
  _.$_$.c1 = Delay;
  _.$_$.d1 = Job_0;
  _.$_$.e1 = Runnable;
  _.$_$.f1 = SupervisorJob;
  _.$_$.g1 = cancel;
  _.$_$.h1 = cancel_0;
  _.$_$.i1 = get_isActive_0;
  _.$_$.j1 = get_isActive;
  _.$_$.k1 = get_job;
  _.$_$.l1 = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
