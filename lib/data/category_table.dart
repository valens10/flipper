import 'package:moor/moor.dart';

class CategoryTable extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get name => text()();
  IntColumn get businessId => integer()
      .nullable()
      .customConstraint('NULL REFERENCES business_table(id)')();
}